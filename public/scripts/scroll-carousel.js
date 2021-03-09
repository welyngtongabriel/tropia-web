// Evento de scroll com roda do mouse
document.querySelector(".resource-list").addEventListener("wheel", (event) => {
  //   var x = window.scrollX;
  //   var y = window.scrollY;
  //   window.onscroll = function () {
  //     window.scrollTo(x, y);
  //   };

  if (event.deltaY > 0) {
    event.target.scrollBy(200, 0);
  } else {
    event.target.scrollBy(-200, 0);
  }
});

/**
 * DESCRIÇÃO:
 * wheel = nome do evento de rolagem
 * delta = numero de rolagem da "roda". Numeros positivos para cima, negativos para  baixo
 * ScrollBy(eixo X, Eixo Y) = mover a barra n pixels nos eixos
 *
 * OBSERVAÇÃO: Este evento será "escutado" apenas quando o mouse estiver sobre a
 * barra de rolagem. Para isso é preciso desabilitar os eventos do cursor sobre os itens
 * da lista de rolagem.
 */
