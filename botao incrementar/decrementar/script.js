// Selecionando o elemento span com id #valor
const value = document.querySelector("#valor");

/*
   Criando a função incrementar:
   Pegamos o conteúdo do span selecionado atribuímos a ele um valor inteiro (parseInt), a partir disso adicionamos + 1 a cada clique no botão +
*/
function incrementar() {
   value.innerHTML = `${parseInt(value.innerText) + 1}`;
}

/* Na função decrementar fazemos o mesmo procedimento da função incrementar, porém agora iremos diminuir o valor do span em - 1 */
function decrementar() {
   value.innerHTML = `${parseInt(value.innerText) - 1}`;
}

/* Resetando o valor, simplesmente atribuímos ao span o valor inicial que será 0 */
function resetar() {
   value.innerHTML = "0";
}