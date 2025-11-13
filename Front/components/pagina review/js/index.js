const reviews = [
    {
        titulo: "Review: O Tomate Vermelho",
        dados: "Por: Gabriel Da Silva Spisila Junior| Publicado em: 26 de Junho de 2055",
        imagemSrc: "img/Banner-047.png",
        altText: "Capa do jogo O Tomate Vermelho",
        dev: "Gabriel Leite Studios",
        plataformas: "PC",
        genero: "Ação",
        h3: "Uma Aventura Neon Inesquecível",
        p1: "Tomate Totoso chega prometendo mundos e, surpreendentemente, entrega quase tudo. A atmosfera da cidade é densa e a direção de arte é impecável.",
        h3: "Jogabilidade e Combate",
        p2: "O combate é fluido, misturando tiroteios táticos com habilidades. No entanto, a IA dos inimigos poderia ser mais desafiadora em alguns momentos.",
        pro1: "História envolvente e personagens marcantes.",
        pro2: "Gráficos e direção de arte de ponta.",
        con1: "Alguns bugs visuais menores.",
        con2: "A inteligência artificial dos inimigos é irregular.",
        nota: "9.0"
    },
    {
        titulo: "Review:O Deus de Ferro",
        dados: "Por: Maria Souza | Publicado em: 30 de Novembro de 2025",
        imagemSrc: "img/Banner-047.png",
        altText: "Capa do jogo O Deus de Ferro",
        dev: "Gabriel Spisila Studios",
        plataformas: "PC",
        genero: "Puzzle",
        h3: "Uma Homenagem aos Clássicos",
        p1: "O Deus de Ferro é uma carta de amor aos jogos de aventura 2D da era 16-bits. A exploração é o foco principal, com ilhas cheias de segredos.",
        h3: "Simples, mas Charmoso",
        p2: "O combate é direto e simples, mas o charme do jogo está em seus quebra-cabeças e na atmosfera relaxante. Perfeito para quem busca nostalgia.",
        pro1: "Direção de arte pixel-art belíssima.",
        pro2: "Mundo divertido de explorar.",
        con1: "História um pouco previsível.",
        con2: "Combate pode parecer raso para alguns.",
        nota: "8.0"
    },
    {
        titulo: "Review: A Lenda do Pão de Queijo",
        dados: "Por: Ana Clara | Publicado em: 10 de Outubro de 2029",
        imagemSrc: "img/Banner-047.png",
        altText: "Capa do jogo A Lenda do Pão de Queijo",
        dev: "Estúdio Minas",
        plataformas: "PC",
        genero: "RPG",
        h3: "Uma Jornada Saborosa",
        p1: "Este jogo é uma surpresa deliciosa. A narrativa é aconchegante e os puzzles são bem pensados.",
        h3: "Combate Crocante",
        p2: "O sistema de batalha é por turnos e muito estratégico. Cada inimigo 'queimado' é uma vitória.",
        pro1: "Arte e música fantásticas.",
        pro2: "História muito carismática.",
        con1: "Um pouco curto demais.",
        con2: "Algumas missões são repetitivas.",
        nota: "8.5"
    }

];



let currentIndex = 0;



function carregarReview() {

    const reviewData = reviews[currentIndex];

    document.getElementById("review-titulo").textContent = reviewData.titulo;
    document.getElementById("review-dados").textContent = reviewData.dados;

    document.getElementById("capa-jogo").src = reviewData.imagemSrc;
    document.getElementById("capa-jogo").alt = reviewData.altText;

    document.getElementById("dev").textContent = reviewData.dev;

    document.getElementById("plataforma").textContent = reviewData.plataformas;
    document.getElementById("genero").textContent = reviewData.genero;

    document.getElementById("review-h3-1").textContent = reviewData.h3_1;
    document.getElementById("review-p1").textContent = reviewData.p1;
    document.getElementById("review-h3-2").textContent = reviewData.h3_2;
    document.getElementById("review-p2").textContent = reviewData.p2;

    document.getElementById("review-pro-1").textContent = reviewData.pro1;
    document.getElementById("review-pro-2").textContent = reviewData.pro2;
    document.getElementById("review-con-1").textContent = reviewData.con1;
    document.getElementById("review-con-2").textContent = reviewData.con2;

    document.getElementById("nota-pontua").textContent = reviewData.nota;
}

const meuBotao = document.getElementById("botao");


meuBotao.addEventListener("click", function () {

    currentIndex = currentIndex + 1;

    if (currentIndex >= reviews.length) {
        currentIndex = 0;
    }

    carregarReview();
});

window.addEventListener("load", carregarReview);