var nome_input = document.getElementById("nome_input")
var sobrenome_input = document.getElementById("sobrenome_input")
var nome_usuario_input = document.getElementById("nome_usuario_input")
var email_input = document.getElementById("email_input")
var senha_input = document.getElementById("senha_input")
var confirmar_senha_input = document.getElementById("confirmar_senha_input")

var criar_botao = document.getElementById("criar_botao")

criar_botao.addEventListener('click', criar_conta)

function criar_conta() {

  if (nome_input.value === '') {
    alert("SEM NOME")
  }
  else if (sobrenome_input.value === ''){
    alert("SEM SOBRENOME")
  }
  else if (nome_usuario_input.value === '') {
    alert("SEM NOME USUARIO")
  }
  else if (email_input.value === '') {
    alert("SEM EMAIL")
  }
  else if (senha_input.value === '') {
    alert("SEM SENHA")
  }
  else if (confirmar_senha_input.value === '') {
    alert("CONFIRMAR SENHA VAZIO")
  }
  else {
    alert("TUDO CERTO")
  }

}