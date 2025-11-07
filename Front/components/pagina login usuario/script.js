const email = document.getElementById("email_input");
const senha = document.getElementById("senha_input");

const login_botao = document.getElementById("login_botao");
login_botao.addEventListener('click', fazer_login);

async function fazer_login() {

  if (email.value === '') {

    alert("EMAIL VAZIO");

  }
  else if (senha.value === '') {

    alert("SENHA VAZIA");

  }
  else {

    try {
      console.log("Buscando chave pública...");
      const response = await fetch("../pagina criar usuario/pegar_chave_publica.php");
      const publicKey = await response.text();

      console.log("Gerando chave AES...");
      const aesKey = CryptoJS.lib.WordArray.random(32);
      const aesIV = CryptoJS.lib.WordArray.random(16);

      console.log("Criptografando senha com AES...");
      const senhaPlana = senha.value;
      const encryptedPassword = CryptoJS.AES.encrypt(senhaPlana, aesKey, { iv: aesIV });

      console.log("Criptografando chave AES com RSA...");
      const symmetricPayload = aesKey.toString(CryptoJS.enc.Base64) + ":" + aesIV.toString(CryptoJS.enc.Base64);

      const rsa = new JSEncrypt();
      rsa.setPublicKey(publicKey);
      const encryptedSymmetricPayload = rsa.encrypt(symmetricPayload);

      const dados_para_enviar = {
        email: email.value,
        rsa_payload: encryptedSymmetricPayload,
        aes_data: encryptedPassword.toString()
      };

      console.log("Enviando pacote de login criptografado...");
      var retorno = await fetch("login_usuario.php", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados_para_enviar)
      });

      var dados_retorno = await retorno.json();

      alert(dados_retorno.mensagem);

      if (dados_retorno.status == "s") {
        window.location.href = "../pagina_principal/index.html";
      }

    }
    catch (error) {
      console.error("Erro no processo de criptografia ou login:", error);
      alert("Falha ao enviar dados de login.");
    }
  }





}