// import Page from "./views/pages.js";
import pages from "./pages.js";
// const pages = require("./pages.js");

console.log(pages.landing_launch);

// Redireciona o usuário para a página da desejada assim que
// a página inicial é carregada
// window.location.href = "./pages/landing-page/views/index.html";

// Redireciona o usuário para a página da desejada após 5 segundos
// a opção "replace" não mantém a página anterior no histórico
setTimeout(function () {
  window.location.replace(pages.landing_launch);
}, 5000);
