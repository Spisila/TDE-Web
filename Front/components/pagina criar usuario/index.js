const nome_input = document.getElementById("nome_input")
const sobrenome_input = document.getElementById("sobrenome_input")
const nome_usuario_input = document.getElementById("nome_usuario_input")
const data_nascimento_input = document.getElementById("data_nascimento_input")
const email_input = document.getElementById("email_input")
const senha_input = document.getElementById("senha_input")
const confirmar_senha_input = document.getElementById("confirmar_senha_input")

const criar_botao = document.getElementById("criar_botao")

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

    try {

      console.log("Buscando chave pública...");
      const response = await fetch("pegar_chave_publica.php");
      const publicKey = await response.text();

      console.log("Gerando chave AES...");
      const aesKey = CryptoJS.lib.WordArray.random(32);
      const aesIV = CryptoJS.lib.WordArray.random(16);

      console.log("Criptografando senha com AES...");
      const senhaPlana = senha_input.value;
      const encryptedPassword = CryptoJS.AES.encrypt(senhaPlana, aesKey, { iv: aesIV });

      console.log("Criptografando chave AES com RSA...");
      const symmetricPayload = aesKey.toString(CryptoJS.enc.Base64) + ":" + aesIV.toString(CryptoJS.enc.Base64);

      const rsa = new JSEncrypt();
      rsa.setPublicKey(publicKey);
      const encryptedSymmetricPayload = rsa.encrypt(symmetricPayload);

      const dados_para_enviar = {
        nome: nome_input.value,
        sobrenome: sobrenome_input.value,
        nome_usuario: nome_usuario_input.value,
        data_nascimento: data_nascimento_input.value,
        email: email_input.value,
        rsa_payload: encryptedSymmetricPayload,
        aes_data: encryptedPassword.toString()
      };

      console.log("Enviando pacote criptografado...");
      var retorno = await fetch("criar_usuario.php", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados_para_enviar)
      });

      var dados_retorno = await retorno.json();

      alert(dados_retorno.mensagem);

      if (dados_retorno.status == "s") {
        window.location.href = "../pagina perfil usuario/index.html";
        localStorage.setItem("usuarioLogado", "true");
      }

    } catch (error) {
      console.error("Erro no processo de criptografia ou envio:", error);
      alert("Falha ao enviar dados criptografados.");
    }

  }

}