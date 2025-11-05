//Usuario
var usuarioLogado = false;

//Jogos
var jogos = [
    { categoria: "trending", genero: "acao", img: "img/Banners/Banner-001.png", nome: "a", preco: 30 },
    { categoria: "trending", genero: "18", img: "img/Banners/Banner-002.png", nome: "a", preco: 70 },
    { categoria: "recommend", genero: "luta", img: "img/Banners/Banner-003.png", nome: "a", preco: 90 },
    { categoria: "recommend", genero: "corrida", img: "img/Banners/Banner-004.png", nome: "a", preco: 25 },
    { categoria: "bestsellers", genero: "18", img: "img/Banners/Banner-005.png", nome: "a", preco: 50 },
    { categoria: "bestsellers", genero: "fps", img: "img/Banners/Banner-006.png", nome: "a", preco: 120 },
    { categoria: "bestsellers", genero: "terror", img: "img/Banners/Banner-007.png", nome: "a", preco: 15 },
    { categoria: "trending", genero: "rpg", img: "img/Banners/Banner-008.png", nome: "a", preco: 80 },
    { categoria: "recommend", genero: "terror", img: "img/Banners/Banner-009.png", nome: "a", preco: 40 },
    { categoria: "recommend", genero: "18", img: "img/Banners/Banner-010.png", nome: "a", preco: 100 },
    { categoria: "trending", genero: "terror", img: "img/Banners/Banner-011.png", nome: "a", preco: 60 },
    { categoria: "recommend", genero: "rpg", img: "img/Banners/Banner-012.png", nome: "a", preco: 45 },
    { categoria: "bestsellers", genero: "educativo", img: "img/Banners/Banner-013.png", nome: "a", preco: 110 },
    { categoria: "bestsellers", genero: "18", img: "img/Banners/Banner-014.png", nome: "a", preco: 75 },
    { categoria: "trending", genero: "puzzle", img: "img/Banners/Banner-015.png", nome: "a", preco: 90 },
    { categoria: "recommend", genero: "puzzle", img: "img/Banners/Banner-016.png", nome: "a", preco: 0 }
];

//Renderização mine 2015
function mostra_o_jogos(lista) {

    var container = document.getElementById("catalogo");
    container.innerHTML = "";

    for (var i = 0; i < lista.length; i++) {
        container.innerHTML += `
            <div class="case_jogos">
                <div class="img_jogo"><img src="
                    ${lista[i].img}">
                </div>
                <div class="descricao">
                    <div class="name">
                        <a href="../pagina jogo/index.html" class="links">${jogos[i].nome}</a>
                    </div>
                    <div class="preco">R$ 
                        ${lista[i].preco}
                    </div>
                </div>
            </div>
        `;
    }
}

//Rodou
window.onload = function () {
    mostra_o_jogos(jogos);

    var containerLogin = document.querySelector('.login_button');
    var containerCadastro = document.querySelector('.cadastro_button');
    var containerExtra = document.querySelector('.extra_button');

    if (usuarioLogado) {
        containerLogin.innerHTML = '<a href="../pagina perfil usuario/index.html" class="botao_cabecalho">Conta</a>';
        containerCadastro.innerHTML = '<a href="../pagina biblioteca usuario/index.html" class="botao_cabecalho">Biblioteca</a>';

        if (containerExtra) {
            containerExtra.innerHTML = '<a href="../pagina admin/index.html" class="botao_cabecalho">Painel</a>';
        }
        
    } else {
        containerLogin.innerHTML = '<a href="../pagina login usuario/index.html" class="botao_cabecalho">Login</a>';
        containerCadastro.innerHTML = '<a href="../pagina criar usuario/index.html" class="botao_cabecalho">Cadastro</a>';

        if (containerExtra) containerExtra.innerHTML = '';
    }

    document.getElementById("button_filtrar").onclick = function () {

        var filtro_ordenado = document.getElementById("filtro_ordenar").value;
        var filtro_generozo = document.getElementById("filtro_genero").value;
        var min = parseFloat(document.getElementById("preco_min").value);
        var max = parseFloat(document.getElementById("preco_max").value);

        var filtrados = jogos.filter(j =>
            j.preco >= min && j.preco <= max &&

            (filtro_generozo === "todos" || j.genero === filtro_generozo)
        );

        if (filtro_ordenado === "trending" || filtro_ordenado === "recommend" || filtro_ordenado === "bestsellers") {
            filtrados = filtrados.filter(j => j.categoria === filtro_ordenado);
        }

        if (filtro_ordenado === "menor") filtrados.sort((a, b) => a.preco - b.preco);
        if (filtro_ordenado === "maior") filtrados.sort((a, b) => b.preco - a.preco);

        mostra_o_jogos(filtrados);
    };

    document.getElementById("button_resetar").onclick = function () {

        document.getElementById("filtro_ordenar").value = "todos";
        document.getElementById("filtro_genero").value = "todos";
        document.getElementById("preco_min").value = 0;
        document.getElementById("preco_max").value = 100000000000000000;

        mostra_o_jogos(jogos);
    };

    const params = new URLSearchParams(window.location.search);
    const filtroURL = params.get("filtro");

    if (filtroURL) {
        if (["trending", "recommend", "bestsellers", "menor", "maior", "todos"].includes(filtroURL)) {
            document.getElementById("filtro_ordenar").value = filtroURL;
        } 
        else if (document.getElementById("filtro_genero")) {
            document.getElementById("filtro_genero").value = filtroURL;
        }

        document.getElementById("button_filtrar").click();
    }
};