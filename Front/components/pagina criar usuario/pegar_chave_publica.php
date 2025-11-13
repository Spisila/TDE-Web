<?php
header('Content-Type: text/plain');

$path = 'D:\Faculdade\XAMPPS\htdocs\TDE-Web\chaves\public.pem';

if (file_exists($path)) {
    echo file_get_contents($path);
} else {
    http_response_code(500);
    echo "Erro: Chave pública não encontrada. Tentativa em: " . $path;
}
?>
?>