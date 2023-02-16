//IIFE -> Immediately invoked function expression
//uma func que é imediatamente criada e invocada

const idade = 14; // const do escopo global
(function () {
    function falaNome(nome, sobrenome){
    return nome + ' ' + sobrenome
}
const idade = 16; //const do escopo da func
console.log(falaNome('niekt', 'menas'), idade)

})(); //isso protege do escopo global (o que ta fora da função)