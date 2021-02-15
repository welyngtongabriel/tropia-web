// MENU RESPONSIVO
// let showMenu = true; // Exibição do menu normal

// const menuSection = document.querySelector("menu-section");
// // ↑ irá procurar no documento um elemento  com a classe descrita

// const menuToggle = menuSection.querySelector("menu-toggle");
// // ↑ Dentro do elemento "section" encontre o "toggle"

// // Adicionar evento do mouse no elemento
// menuToggle.addEventListener("click", () => {
//   menuSection.classList.toggle("on", showMenu);
//   // ↑ Acessa a lista de classes do elemento e verifica se existe a classe "on"
//   // ".toggle" adiciona ou remove classes. Se ele encontrar remove, senão adiciona
//   // para segurança, e que o toggle remova ou adicione só quando desejarmos adicionamos
//   // a variavel/função que irá validar ação

//   showMenu = !showMenu;
// });

// console.log("Hello");

let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"
    // ↑ Se "show = true" então...

    menuSection.classList.toggle("on", show)
    show = !show;
})
