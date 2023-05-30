// Seleção de elementos
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

/* A função setInterval recebe uma primeira função anônima como primeiro parâmetro, nesse caso estamos usando arrow function, uma forma de escrever funções () => {}. Como segundo parâmetro daremos o valor 1000 que equivale a 1000 milisegundos ou 1 segundo. Capturamos a hora com new Date() e transferimos os valores para as respectivas variáveis que renderizarão os valores em conjunto da função formatarHorario(). */
setInterval(() => {
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    horas.innerHTML = formatarHorario(`${hora}`);
    minutos.innerHTML = formatarHorario(`${minuto}`);    
    segundos.innerHTML = formatarHorario(`${segundo}`);    

}, 1000);

/* Na função formatar horário fica definido com um operador condicional ternário se o valor é menor do que dez, sendo verdadeiro será colocado um zero antes para evitar que o relógio fique assim: 5 : 2 : 7, com a formatação fica: 05 : 02: 07 */
function formatarHorario(horario) {
    return horario < 10 ? "0" + horario : horario;
}