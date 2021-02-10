import Page from "./pages/pages.js";
console.log(Page.landing_page);

// Redireciona o usuário para a página da desejada assim que
// a página inicial é carregada
// window.location.href = "./pages/landing-page/views/index.html";

// Redireciona o usuário para a página da desejada após 5 segunos
// a opção "replace" não mantém a página anterior no histórico
// setTimeout(function () {
window.location.replace(Page.landing_page);
// }, 1500);
