<?php

//Conexão com banco de dados

$host_name = "localhost:3306";
$user_name = "root";
$password = "Prokopenko1!";
$dbname = "manguezal_dos_games";

$conexao = mysqli_connect($host_name, $user_name, $password, $dbname);

if (mysqli_connect_errno()) {
  echo "Conexao com banco de dados falhou" . mysqli_connect_error();
}

// Statement

$email = $_POST["email"];
$senha_digitada = $_POST["senha"];

$statement = mysqli_stmt_init($conexao);

$query = "SELECT * FROM usuario WHERE email = ?";


mysqli_stmt_prepare($statement, $query);
mysqli_stmt_bind_param($statement, "s", $email);

$statement_resultado = mysqli_stmt_execute($statement);

$busca_resultado = mysqli_stmt_get_result($statement);

$resultado = [];

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

echo json_encode($resultado)

  ?>