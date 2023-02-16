//crie uma func com parametro -> mostre no console os parametro -> condicao pra parar -> atualiza -> executa

function recursiva(max) {
    console.log(max)
    if (max >= 10) return;
    max++
    recursiva(max)
}
recursiva(0);

//funcoes recursivas funcionam como estrutura de repetição