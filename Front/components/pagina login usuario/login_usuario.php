<?php

header('Content-Type: application/json');
$resultado = [];

try {

  $data = json_decode(file_get_contents('php://input'));

  $privateKeyPEM = file_get_contents('D:\Faculdade\XAMPPS\htdocs\TDE-Web\chaves\private.key');
  $privateKey = openssl_pkey_get_private($privateKeyPEM);
  if ($privateKey === false) {
    throw new Exception('Falha ao carregar chave privada.');
  }

  $decryptedSymmetricPayload = '';
  openssl_private_decrypt(
    base64_decode($data->rsa_payload),
    $decryptedSymmetricPayload,
    $privateKey,
    OPENSSL_PKCS1_PADDING
  );
  if ($decryptedSymmetricPayload === '') {
    throw new Exception('Falha ao decifrar payload RSA.');
  }

  list($aesKey_Base64, $aesIV_Base64) = explode(':', $decryptedSymmetricPayload);
  $aesKey = base64_decode($aesKey_Base64);
  $aesIV = base64_decode($aesIV_Base64);

  $senha_digitada = openssl_decrypt(
    base64_decode($data->aes_data),
    'aes-256-cbc',
    $aesKey,
    OPENSSL_RAW_DATA,
    $aesIV
  );
  if ($senha_digitada === false) {
    throw new Exception('Falha ao decifrar senha AES.');
  }

  $host_name = "localhost:3306";
  $user_name = "root";
  $password = "Prokopenko1!";
  $dbname = "manguezal_dos_games";

  $conexao = mysqli_connect($host_name, $user_name, $password, $dbname);

  if (mysqli_connect_errno()) {
    echo "Conexao com banco de dados falhou" . mysqli_connect_error();
  }


  $email = $data->email;


  $statement = mysqli_stmt_init($conexao);
  $query = "SELECT * FROM usuario WHERE email = ?";
  mysqli_stmt_prepare($statement, $query);
  mysqli_stmt_bind_param($statement, "s", $email);


  $statement_resultado = mysqli_stmt_execute($statement);

  $busca_resultado = mysqli_stmt_get_result($statement);


  if (mysqli_num_rows($busca_resultado) > 0) {

    $dados_usuario = mysqli_fetch_assoc($busca_resultado);
    $hash_query = $dados_usuario["senhaHash"];


    if (password_verify($senha_digitada, $hash_query)) {

      $resultado["status"] = "s";
      $resultado["mensagem"] = "USUARIO EXISTE";
      unset($dados_usuario["senhaHash"]);
      $resultado["dados"] = $dados_usuario;

    } else {

      $resultado["status"] = "n";
      $resultado["mensagem"] = "USUARIO NAO EXISTE";

    }

  } else {

    $resultado["status"] = "n";
    $resultado["mensagem"] = "EMAIL NAO REGISTRADO";

  }


  mysqli_stmt_close($statement);
  mysqli_close($conexao);

  echo json_encode($resultado);
} catch (Exception $e) {
  $resultado["status"] = "n";
  $resultado["mensagem"] = "Email ou senha inválidos.";
}


?>