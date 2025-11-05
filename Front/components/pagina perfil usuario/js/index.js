window.onload = function () {



    var containerLogin = document.querySelector('.login_button');
    var containerCadastro = document.querySelector('.cadastro_button');

    if (usuarioLogado) {
        containerLogin.innerHTML = '<a href="../pagina perfil usuario/index.html" class="botao_cabecalho">Conta</a>';
        containerCadastro.innerHTML = '<a href="../pagina biblioteca usuario/index.html" class="botao_cabecalho">Biblioteca</a>';
    } else {
        containerLogin.innerHTML = '<a href="../pagina login usuario/index.html" class="botao_cabecalho">Login</a>';
        containerCadastro.innerHTML = '<a href="../pagina criar usuario/index.html" class="botao_cabecalho">Cadastro</a>';
    }