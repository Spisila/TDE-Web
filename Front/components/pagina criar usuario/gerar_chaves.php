<?php

$chave_config = array(
  "digest_alg" => 'md5',
  "private_key_bits" => 2048,
  "private_key_type" => OPENSSL_KEYTYPE_RSA,
);

$gerar_resposta = openssl_pkey_new($chave_config);

if (!$gerar_resposta) {
  echo "ERRO GERAR CHAVES : " . openssl_error_string();
}

openssl_pkey_export($gerar_resposta, $chave_privada);

$chave_publica_detalhes = openssl_pkey_get_details($gerar_resposta);
$chave_publica = $chave_publica_detalhes["key"];

file_put_contents("chave_publica.pem", $chave_publica);
file_put_contents("chave_privada.pem", $chave_privada);



?>