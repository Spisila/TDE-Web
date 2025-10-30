var email = document.getElementById("email_input");
var senha = document.getElementById("senha_input");

var login_botao = document.getElementById("login_botao");
login_botao.addEventListener('click', fazer_login);

async function fazer_login(params) {

  if (email.value === '') {

    alert("EMAIL VAZIO");

  }
  else if (senha.value === '') {

    alert("SENHA VAZIA");

  }
  else {

    var form_dados = new FormData()
    form_dados.append("email", email.value)
    form_dados.append("senha", senha.value)

    var retorno = await fetch("login_usuario.php", {
      method: "POST",
      body: form_dados
    })

    var dados_retorno = await retorno.json();

    if (dados_retorno.status == "s") {

      alert("Usuario Existe");

    }
    else if (dados_retorno.status == "n") {

      alert("Usuario não existe");

    }

  }


}