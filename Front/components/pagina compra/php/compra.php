<?php
$numero_cartao = $_POST["numero_cartao"];
$nome_cartao = $_POST["nome_cartao"];
$validade_cartao = $_POST["validade_cartao"];
$codigo_seguranca = $_POST["codigo_seguranca"];

$chance = rand(1, 2);

$aprovado = ($chance == 1);


if ($aprovado) {

    $con = mysqli_connect("localhost:3306", "root", "@Wlsferreira05", "tde-web");

    $stmt = mysqli_stmt_init($con);
    $query = "INSERT INTO pedidos (nome_no_cartao, numero_do_cartao, validade, cvv) VALUES (?,?,?,?)";
    mysqli_stmt_prepare($stmt, $query);
    mysqli_stmt_bind_param($stmt, 'ssss', $nome_cartao, $numero_cartao, $validade_cartao, $codigo_seguranca);
    $resultado = mysqli_stmt_execute($stmt);

    if ($resultado == true) {
        $retorno["status"] = "s";
        $retorno["mensagem"] = "Pagamento APROVADO! Compra realizada com sucesso!";
    } else {
        $retorno["status"] = "n";
        $retorno["mensagem"] = "Pagamento aprovado, mas falhou ao salvar no banco. (Erro de DB)";
    }

} else {

    $retorno["status"] = "n";
    $retorno["mensagem"] = "Pagamento NEGADO. Verifique os dados ou limite do cartão.";
}

$json = json_encode($retorno);
echo $json;

?>