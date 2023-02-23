const headerTagHTML = document.getElementById('recicly-code')

fetch('header.html')
  .then(function (response) {
    return response.text();
  })
  .then(function (conteudoHTML) {
    // faça algo com o conteúdo HTML retornado
    headerTagHTML.insertAdjacentHTML('beforeend', conteudoHTML)

  });
;

function categProdutos() {
  window.location.href = "produtos.html";

}