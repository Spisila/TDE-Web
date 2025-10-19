/*
var date;
var image;
var title;
var game;

const new_list = [
  { news_date: "25/02", image: "'imagens/Profile-008.png'", title: "NOTICIA 1", game: "TEREGH" },
  { news_date: "12/05", image: "'imagens/Profile-058.png'", title: "NOTICIA 2", game: "MOLSO" },
  { news_date: "25/02", image: "'imagens/Profile-028.png'", title: "NOTICIA 3", game: "MOLOS" },
  { news_date: "12/05", image: "'imagens/Profile-068.png'", title: "NOTICIA 4", game: "ASOSL" },
  { news_date: "12/05", image: "'imagens/Profile-097.png'", title: "NOTICIA 5", game: "XOIW" }
];

for (var i = 0; i < new_list.length; i++) {

  date = new_list[i].news_date;
  image = new_list[i].image;
  title = new_list[i].title;
  game = new_list[i].game;

  var base_game_news =
    `<div class="base_game_news">

    <div class="game_news_date">

      <p>${date}</p>

    </div>

    <div class="game_news_image_container">

      <img src=${image} alt="" class="game_news_image">

    </div>

    <div class="game_news_title">

      <p>${title}</p>

    </div>

    <div class="game_news_game">

      ${game}

    </div>

  </div>`;

  console.log(image);

  document.getElementById("game_news_list").innerHTML += base_game_news;
  
}
*/