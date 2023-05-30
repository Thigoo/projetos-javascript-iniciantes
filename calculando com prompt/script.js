/* Iremos calcular a média de três números informados no prompt de comando. Usamos "Number" antes do prompt para garantir que de fato o valor informado seja umnúmero para o cálculo. Caso digite algo que não seja um número o seu retorno será NaN(not a number). Caso o número seja decimal deveremos usar 3.5 ao invés de 3,5 */

const primeiroNumero = Number(prompt("Bem vindo ao cálculo de média! Informe o primeiro número:"));
const segundoNumero = Number(prompt("Segundo:"));
const terceiroNumero = Number(prompt("Terceiro"));

/* Aqui calculamos a média entre os três números e limitamos o resultado a duas casas decimais usando "toFixed(2)" */
const media = ((primeiroNumero + segundoNumero + terceiroNumero) / 3).toFixed(2);

/* Dispara um alerta com os números informados e a média deles */
alert(`Os números são: ${primeiroNumero}, ${segundoNumero} e ${terceiroNumero}, e a média entre eles é ${media}.`);

/* Aproveite para brincar com este projeto adicionando mais números ou mesclando entre números e strings */