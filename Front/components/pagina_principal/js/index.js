// Verificador login/cadastro ._.

var usuarioLogado = false;

// Pesquisa

function pesquisarJogo() {
    var termo = document.getElementById("barra_pesquisa").value.trim();
    if (termo !== "") {
        console.log("Pesquisando por:", termo);
    }
}

// Variavel cards

var trending = [
    { img: "img/Banners/Banner-003.png", nome: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", preco: 10 },
    { img: "img/Banners/Banner-005.png", nome: "aa", preco: 10 },
    { img: "img/Banners/Banner-001.png", nome: "aa", preco: 10 },
    { img: "img/Banners/Banner-007.png", nome: "aa", preco: 10 },
    { img: "img/Banners/Banner-010.png", nome: "aa", preco: 10 },
    { img: "img/Banners/Banner-002.png", nome: "aa", preco: 10 }
];

var recommend = [
    { img: "img/Banners/Banner-087.png", nome: "aa", preco: 10 },
    { img: "img/Banners/Banner-069.png", nome: "aa", preco: 10 },
    { img: "img/Banners/Banner-054.png", nome: "aa", preco: 10 },
    { img: "img/Banners/Banner-012.png", nome: "aa", preco: 10 },
    { img: "img/Banners/Banner-024.png", nome: "aa", preco: 10 },
    { img: "img/Banners/Banner-076.png", nome: "aa", preco: 10 }
];

var bestsellers = [
    { img: "img/Banners/Banner-043.png", nome: "aa", preco: 10 },
    { img: "img/Banners/Banner-046.png", nome: "aa", preco: 10 },
    { img: "img/Banners/Banner-056.png", nome: "aa", preco: 10 },
    { img: "img/Banners/Banner-090.png", nome: "aa", preco: 10 },
    { img: "img/Banners/Banner-096.png", nome: "aa", preco: 10 },
    { img: "img/Banners/Banner-078.png", nome: "aa", preco: 10 }
];

var categoria = [
    { tema: "img/Banners/Banner-033.png", categoria_name: "Ação" },
    { tema: "img/Banners/Banner-029.png", categoria_name: "RPG" },
    { tema: "img/Banners/Banner-088.png", categoria_name: "18+" },
    { tema: "img/Banners/Banner-019.png", categoria_name: "Puzzle" },
    { tema: "img/Banners/Banner-009.png", categoria_name: "Educativo" },
    { tema: "img/Banners/Banner-072.png", categoria_name: "Terror" },
    { tema: "img/Banners/Banner-071.png", categoria_name: "FPS" },
    { tema: "img/Banners/Banner-075.png", categoria_name: "Luta" },
    { tema: "img/Banners/Banner-073.png", categoria_name: "Corrida" }
];

var review = [
    { img: "img/Banners/Banner-001.png", nick: "aa", nota: 10, comentario: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
    { img: "img/Banners/Banner-069.png", nick: "aa", nota: 10, comentario: "aa" },
    { img: "img/Banners/Banner-023.png", nick: "aa", nota: 10, comentario: "aa" },
    { img: "img/Banners/Banner-077.png", nick: "aa", nota: 10, comentario: "aa" },
];

// Carregar pagina

window.onload = function () {

    // Usuário

    var containerLogin = document.querySelector('.login_button');
    var containerCadastro = document.querySelector('.cadastro_button');

    if (usuarioLogado) {
        containerLogin.innerHTML = '<a href="../pagina perfil usuario/index.html" class="botao_cabecalho">Conta</a>';
        containerCadastro.innerHTML = '<a href="../pagina biblioteca usuario/index.html" class="botao_cabecalho">Biblioteca</a>';
    } else {
        containerLogin.innerHTML = '<a href="../pagina login usuario/index.html" class="botao_cabecalho">Login</a>';
        containerCadastro.innerHTML = '<a href="../pagina criar usuario/index.html" class="botao_cabecalho">Cadastro</a>';
    }

    // Templat card

    var container_trending = document.getElementById("trending");

    if (container_trending) {
        container_trending.innerHTML = "";

        for (var i = 0; i < trending.length; i++) {
            container_trending.innerHTML += `
                <div class="case_trending_jogo">
                    <div class="img_trending">
                        <img src=${trending[i].img}>
                    </div>
                    <div class="descricao_trending">
                        <div class="name_trending">
                           <a href="../pagina jogo/index.html">${trending[i].nome}</a>
                        </div>
                        <div class="preco_trending">
                            ${trending[i].preco}
                        </div>
                    </div>
                </div>
            `;
        }
    }

    var container_recommend = document.getElementById("recommend");

    if (container_recommend) {
        container_recommend.innerHTML = "";

        for (var i = 0; i < recommend.length; i++) {
            container_recommend.innerHTML += `
                <div class="case_recommend_jogo">
                    <div class="img_recommend">
                        <img src=${recommend[i].img}>
                    </div>
                    <div class="descricao_recommend">
                        <div class="name_recommend">
                            <a href="../pagina jogo/index.html" class="links">${recommend[i].nome}</a>
                        </div>
                        <div class="preco_recommend">
                            ${recommend[i].preco}
                        </div>
                    </div>
                </div>
            `;
        }
    }

    var container_bestsellers = document.getElementById("bestsellers");

    if (container_bestsellers) {
        container_bestsellers.innerHTML = "";

        for (var i = 0; i < bestsellers.length; i++) {
            container_bestsellers.innerHTML += `
                <div class="case_bestsellers_jogo">
                    <div class="img_bestsellers">
                        <img src=${bestsellers[i].img}>
                    </div>
                    <div class="descricao_bestsellers">
                        <div class="name_bestsellers">
                            <a href="../pagina jogo/index.html" class="links">${bestsellers[i].nome}</a>
                        </div>
                        <div class="preco_bestsellers">
                            ${bestsellers[i].preco}
                        </div>
                    </div>
                </div>
            `;
        }
    }

    var container_categoria = document.getElementById("categoria");

    if (container_categoria) {
        container_categoria.innerHTML = "";

        for (var i = 0; i < categoria.length; i++) {
            container_categoria.innerHTML +=

                `
                <div class="card_categoria">
                    <div class="tema">
                        <img src=${categoria[i].tema}>
                    </div>
                    <div class="categoria_name">
                        <a href="../pagina catalogo/index.html" class="links">${categoria[i].categoria_name}</a>
                    </div>
                </div>
            `;
        }
    }

    const container_review = document.getElementById("review");
    container_review.innerHTML = "";

    for (let i = 0; i < review.length; i++) {
        const card_review = `
            <div class="card_review">
                <div class="img_review">
                    <img src=${review[i].img}>
                </div>
                <div class="tag">
                    <div class="nick_name">
                        <a href="../pagina review/index.html" class="links">${review[i].nick}</a>
                    </div>
                    <div class="nota">
                        ${review[i].nota}
                    </div>
                </div>
                <div class="comentario">
                    ${review[i].comentario}
                </div>
            </div>
        `;
        container_review.innerHTML += card_review;
    }
};

// Comer o spisila