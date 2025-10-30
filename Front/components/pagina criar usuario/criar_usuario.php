<?php

$host_name = "localhost:3306";
$user_name = "root";
$password = "Prokopenko1!";
$dbname = "manguezal_dos_games";

$conexao = mysqli_connect($host_name, $user_name, $password, $dbname);

if (mysqli_connect_errno()) {

  echo "Conexao falhou" . mysqli_connect_error();

} else {

  echo "Conexao completa";

}

$nome = $_POST["nome"];
$sobrenome = $_POST["sobrenome"];
$email = $_POST["email"];
$senha = $_POST["senha"];
$data_nascimento = $_POST["data_nascimento"];
$apelido = $_POST["nome_usuario"];

$statement = mysqli_stmt_init($conexao);
$query = "INSERT INTO usuario (nome, sobrenome, email, passwordHash, dataNascimento, apelidoUsuario) VALUES (?,?,?,?,?,?)";

mysqli_stmt_prepare($statement, $query);
mysqli_stmt_bind_param($statement, "ssssss", $nome, $sobrenome, $email, $senha, $data_nascimento, $apelido);

$result = mysqli_stmt_execute($statement);

if ($result === false) {

  $retorno["status"] = "n";
  $retorno["mensagem"] = "ERRO CADASTRO";

} else {

  $retorno["status"] = "s";
  $retorno["mensagem"] = "CADASTRO";

}

$json = json_encode($retorno);
echo $json;
?>