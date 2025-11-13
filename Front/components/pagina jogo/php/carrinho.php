<?php

session_start();

$_SESSION['id_usuario'] = 1;


header('Content-Type: application/json');
$retorno = ["status" => "n", "mensagem" => ""];


if (!isset($_SESSION['id_usuario'])) {
    $retorno["mensagem"] = "Erro: Você precisa estar logado para adicionar itens!";
    echo json_encode($retorno);
    exit();
}

$id_usuario = $_SESSION['id_usuario'];

$conn = new mysqli("localhost:3306", "root", "@Wlsferreira05", "tde-web");

if ($conn->connect_error) {
    $retorno["mensagem"] = "Falha na conexão: " . $conn->connect_error;
    echo json_encode($retorno);
    exit();
}

if (
    isset($_POST['id_produto']) &&
    isset($_POST['nome_produto']) &&
    isset($_POST['preco'])
) {

    $id_produto = $_POST['id_produto'];
    $nome = $_POST['nome_produto'];
    $preco = $_POST['preco'];
    $plataforma = $_POST['plataforma'];
    $edicao = $_POST['edicao'];


    $query = "INSERT INTO carrinho 
                (id_usuario_fk, id_produto_fk, nome_produto, plataforma, edicao, preco_unitario) 
              VALUES 
                (?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($query);

    if ($stmt) {

        $stmt->bind_param("iisssd", $id_usuario, $id_produto, $nome, $plataforma, $edicao, $preco);

        if ($stmt->execute()) {
            $retorno["status"] = "s";
            $retorno["mensagem"] = "Adicionado ao carrinho!";
        } else {
            $retorno["mensagem"] = "Erro ao salvar: " . $stmt->error;
        }
        $stmt->close();
    } else {
        $retorno["mensagem"] = "Erro de query: " . $conn->error;
    }
} else {
    $retorno["mensagem"] = "Erro: Dados do produto não recebidos.";
}

$conn->close();

echo json_encode($retorno);
?>