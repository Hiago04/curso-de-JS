//https://youtu.be/KV1ph8CYWi4

let n = 0;

let myTimer = setTimeout(function(){
    console.log(`O valor de n é 0`)
}, 1500) /* Daqui a 1500 milissegundos (= 1 segundo e meio) ele executa */

n = 5;

if(n !== 0) {
    clearTimeout(myTimer); /* se n diferente de 0, ele limpa e pausa o setTiemout */
    console.log('n não é mais 0') 
}

/* Clear interval */
let i = 0;
let myInterval = setInterval(function(){ 
console.log(`Mostrando interval ${i++}`)
}, 1000);/* O my interval mostra a  cada 1000 milisegundos (= 1s) os comandos internos*/

setTimeout (function(){
    clearInterval(myInterval); /* Limpa o myInterval */
    console.log('Fim da repetição', i)
}, 5000) /* Executa daqui 5s */
