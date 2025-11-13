
async function adicionarAoCarrinho(event) {

    event.preventDefault();

    var form = document.getElementById("form-add-carrinho");
    var form_dados = new FormData(form);

    try {

        var retorno = await fetch("php/carrinho.php", {
            method: "POST",
            body: form_dados
        });

        var dados = await retorno.json();

        alert(dados.mensagem);

    } catch (error) {
        console.error('Erro ao adicionar ao carrinho:', error);
        alert('Ocorreu um erro de rede. Tente novamente.');
    }
}
