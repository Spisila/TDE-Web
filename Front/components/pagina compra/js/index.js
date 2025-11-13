async function finalizarCompra() {

    var form = document.getElementById("form-pagamento");
    var form_dados = new FormData(form);

    var retorno = await fetch("php/compra.php", {
        method: "POST",
        body: form_dados
    });

    var dados = await retorno.json();

    if (dados.status == "s") {
        alert(dados.mensagem);
    }
    else {
        alert(dados.mensagem);
    }
}