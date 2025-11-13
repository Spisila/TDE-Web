<?php

header('Content-Type: application/json');
$retorno = [];

try {

  $data = json_decode(file_get_contents('php://input'));

  $privateKeyPEM = file_get_contents('D:\Faculdade\XAMPPS\htdocs\TDE-Web\chaves\private.key');
  $privateKey = openssl_pkey_get_private($privateKeyPEM);
  if ($privateKey === false) {
    throw new Exception('Não foi possível carregar a chave privada.');
  }

  $decryptedSymmetricPayload = '';
  openssl_private_decrypt(
    base64_decode($data->rsa_payload),
    $decryptedSymmetricPayload,
    $privateKey,
    OPENSSL_PKCS1_PADDING
  );
  if ($decryptedSymmetricPayload === '') {
    throw new Exception('Falha ao decifrar o payload simétrico (RSA).');
  }

  list($aesKey_Base64, $aesIV_Base64) = explode(':', $decryptedSymmetricPayload);
  $aesKey = base64_decode($aesKey_Base64);
  $aesIV = base64_decode($aesIV_Base64);

  $senha = openssl_decrypt(
    base64_decode($data->aes_data),
    'aes-256-cbc',
    $aesKey,
    OPENSSL_RAW_DATA,
    $aesIV
  );
  if ($senha === false) {
    throw new Exception('Falha ao decifrar a senha (AES).');
  }

  $host_name = "localhost:3306";
  $user_name = "root";
  $password = "Prokopenko1!";
  $dbname = "manguezal_dos_games";

  $conexao = mysqli_connect($host_name, $user_name, $password, $dbname);

  if (mysqli_connect_errno()) {

    echo "Conexao falhou" . mysqli_connect_error();

  }

  $nome = $data->nome;
  $sobrenome = $data->sobrenome;
  $email = $data->email;
  $data_nascimento = $data->data_nascimento;
  $apelido = $data->nome_usuario;
  $senha_hash = password_hash($senha, PASSWORD_ARGON2ID);

  $statement = mysqli_stmt_init($conexao);
  $query = "INSERT INTO usuario (nome, sobrenome, email, senhaHash, dataNascimento, apelidoUsuario) VALUES (?,?,?,?,?,?)";

  mysqli_stmt_prepare($statement, $query);
  mysqli_stmt_bind_param($statement, "ssssss", $nome, $sobrenome, $email, $senha_hash, $data_nascimento, $apelido);

  $result = mysqli_stmt_execute($statement);

  if ($result === false) {

    $retorno["status"] = "n";
    $retorno["mensagem"] = "ERRO CADASTRO";

  } else {

    $retorno["status"] = "s";
    $retorno["mensagem"] = "CADASTRO";

  }

} catch (Exception $e) {

  $retorno["status"] = "n";
  $retorno["mensagem"] = "Erro no servidor: " . $e->getMessage();
}

  $json = json_encode($retorno);

  echo $json;

?>