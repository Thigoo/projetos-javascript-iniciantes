// Selecionando os elementos
const input = document.querySelector("#input");
const container = document.querySelector(".container");

/* Definiremos a cor padrão do background como branco #fff e atribuiremos ao container. */
const corPadrao = "#fff";
container.style.backgroundColor = `${corPadrao}`;

/* Função simples para definir o backgrounde de acordo com o valor selecionado no input. */
function trocarBackground() {
    container.style.backgroundColor = `${input.value}`
}