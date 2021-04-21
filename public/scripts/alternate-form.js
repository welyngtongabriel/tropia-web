// ALTERAR FORMULÁRIO DE USUÁRIO

const formRegion = document.querySelector(".form-region");
const buttonDonor = document.getElementById("button-donor");
const buttonCompany = document.getElementById("button-company");
const formDonor = document.querySelector(".form-donor");
const formCompany = document.querySelector(".form-company");

var buttonActive = buttonDonor;

buttonCompany.addEventListener("click", () => {
  // "toggle" adiciona se não tiver, tira se tiver

  if (buttonActive !== buttonCompany) {
    buttonActive = buttonCompany;

    buttonDonor.classList.toggle("on");
    buttonCompany.classList.toggle("on");

    setTimeout(() => {
      formDonor.classList.toggle("on");
      formCompany.classList.toggle("on");
    }, 350);

    formCompany.style.opacity = "1";
    formDonor.style.opacity = "0";
  }
});

buttonDonor.addEventListener("click", () => {
  // "toggle" adiciona se não tiver, tira se tiver

  if (buttonActive !== buttonDonor) {
    buttonActive = buttonDonor;

    buttonDonor.classList.toggle("on");
    buttonCompany.classList.toggle("on");

    setTimeout(() => {
      formDonor.classList.toggle("on");
      formCompany.classList.toggle("on");
    }, 350);

    formCompany.style.opacity = "0";
    formDonor.style.opacity = "1";
  }
});
