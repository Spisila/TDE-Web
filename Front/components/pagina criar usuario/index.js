var nome_input = document.getElementById("nome_input")
var sobrenome_input = document.getElementById("sobrenome_input")
var nome_usuario_input = document.getElementById("nome_usuario_input")
var data_nascimento_input = document.getElementById("data_nascimento_input")
var email_input = document.getElementById("email_input")
var senha_input = document.getElementById("senha_input")
var confirmar_senha_input = document.getElementById("confirmar_senha_input")

var criar_botao = document.getElementById("criar_botao")

criar_botao.addEventListener('click', criar_conta)



async function criar_conta() {

  if (nome_input.value === '') {
    alert("SEM NOME")
  }
  else if (sobrenome_input.value === '') {
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


    var form_dados = new FormData()

    form_dados.append("nome", nome_input.value)
    form_dados.append("sobrenome", sobrenome_input.value)
    form_dados.append("nome_usuario", nome_usuario_input.value)
    form_dados.append("data_nascimento", data_nascimento_input.value)
    form_dados.append("email", email_input.value)
    form_dados.append("senha", senha_input.value)

    var retorno = await fetch("criar_usuario.php", {
      method: "POST",
      body: form_dados
    })

    var dados_retorno = await retorno.json();

    if (dados_retorno.status == "s") {

      alert("DEU BAO");

    }

    console.log(dados_retorno)

  }

}