
const recently_played = [
  { image: "'imagens/Profile-008.png'" },
  { image: "'imagens/Profile-078.png'" },
  { image: "'imagens/Profile-025.png'" },
  { image: "'imagens/Profile-046.png'" },
  { image: "'imagens/Profile-034.png'" },
];

for (var i = 0; i < recently_played.length; i++) {


  var recently_played_game =
    `
    <button class="game_poster_button" style="background-image: url(${recently_played[i].image});"></button>
    `;


  document.getElementById("recently_played_games_list").innerHTML += recently_played_game;

}


const library_icons = [
  { image: "imagens/Profile-008.png" },
  { image: "imagens/Profile-078.png" },
  { image: "imagens/Profile-088.png" },
  { image: "imagens/Profile-098.png" },
  { image: "imagens/Profile-018.png" },
  { image: "imagens/Profile-028.png" },
  { image: "imagens/Profile-038.png" },
  { image: "imagens/Profile-048.png" },
  { image: "imagens/Profile-058.png" },
  { image: "imagens/Profile-023.png" },
  { image: "imagens/Profile-041.png" },
  { image: "imagens/Profile-045.png" },
  { image: "imagens/Profile-023.png" },
  { image: "imagens/Profile-098.png" },
  { image: "imagens/Profile-071.png" },
]

for (var i = 0; i < library_icons.length; i++) {

  var library_icons_game =
    `
    <button class="game_poster_button" style="background-image: url(${library_icons[i].image});"></button>
    `;

  document.getElementById("all_games_container").innerHTML += library_icons_game;

}

const owned_list = [
  { nome: "JOGO 1" },
  { nome: "JOGO 2" },
  { nome: "JOGO 3" },
  { nome: "JOGO 4" },
  { nome: "JOGO 5" },
  { nome: "JOGO 6" },
  { nome: "JOGO 7" },
  { nome: "JOGO 8" },
  { nome: "JOGO 9" },
]

for (var i = 0; i < owned_list.length; i++) {

  var owned_list_game =
    `
      <div class="base_game">

          <p class="game_title">${owned_list[i].nome}</p>
          <button class="play_game_button">Jogar</button>

      </div>
    `

  document.getElementById("owned_games_list").innerHTML += owned_list_game;

}
