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
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 }
];

var recommend = [
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 }
];

var bestsellers = [
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 },
    { img: "a", nome: "aa", preco: 10 }
];

var categoria = [
    { tema: "aaa" },
    { tema: "aaa" },
    { tema: "aaa" },
    { tema: "aaa" },
    { tema: "aaa" },
    { tema: "aaa" },
    { tema: "aaa" },
    { tema: "aaa" },
    { tema: "aaa" }
];

var review = [
    { img: '<img src="img/char.png" alt="">', nick: "aa", nota: 10 },
    { img: '<img src="img/bulba.png" alt="">', nick: "aa", nota: 10 },
    { img: '<img src="img/squirtle.webp" alt="">', nick: "aa", nota: 10 },
    { img: '<img src="img/mew.png" alt="">', nick: "aa", nota: 10 },
];

// Carregar pagina

window.onload = function () {

// Usuário

    var containerLogin = document.querySelector('.login_button');
    var containerCadastro = document.querySelector('.cadastro_button');

    if (usuarioLogado) {
        containerLogin.innerHTML = "Conta";
        containerCadastro.innerHTML = "Biblioteca";
    } else {
        containerLogin.innerHTML = "Login";
        containerCadastro.innerHTML = "Cadastro";
    }

// Templat card

    var container_trending = document.getElementById("trending");

    if (container_trending) {
        container_trending.innerHTML = "";

        for (var i = 0; i < trending.length; i++) {
            container_trending.innerHTML += `
                <div class="case_trending_jogo">
                    <div class="img_trending">
                        ${trending[i].img}
                    </div>
                    <div class="descricao_trending">
                        <div class="name_trending">
                            ${trending[i].nome}
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
                        ${recommend[i].img}
                    </div>
                    <div class="descricao_recommend">
                        <div class="name_recommend">
                            ${recommend[i].nome}
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
                        ${bestsellers[i].img}
                    </div>
                    <div class="descricao_bestsellers">
                        <div class="name_bestsellers">
                            ${bestsellers[i].nome}
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
                <div class="tema">
                    ${categoria[i].tema}
                </div>
            `;
        }
    }

    const container_review = document.getElementById("review");
    container_review.innerHTML = "";

    for (let i = 0; i < review.length; i++) {
        const card_review = `
            <div class="card_review">
                <div class="img_review">${review[i].img}</div>
                <div class="tag">
                    <div class="nick_name">${review[i].nick}</div>
                    <div class="nota">${review[i].nota}</div>
                </div>
            </div>
        `;
        container_review.innerHTML += card_review;
    }
};

// Comer o spisila