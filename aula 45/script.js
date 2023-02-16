// try, catch, finally

function retornaHora(data) {
    if (data && !(data instanceof Date)) { // lembrando que um valor vazio é false. Se data estiver vazio e data não for uma instância de Date
        throw new TypeError('Esperando instância de Date.'); // retorna essa mensagem
    }

    if (!data) {
        data = new Date(); //não faz sentido
    }

    return data.toLocaleTimeString('pt-BR', { //retorna hora
        hour: '2-digit', //limita pra dois dígitos
        minute: '2-digit', //limita pra dois dígitos
        second: '2-digit', //limita pra dois dígitos
        hour12: false // deixa com o horário de 24 horas
    });
}


let data = new Date('01-01-1970 12:58:12')

try {
    // se tivesse um código que desse errado aqui, pularia direto para o catch, não executaria o debaixo
console.log(data.toLocaleTimeString());
console.log(retornaHora(data));
} catch(err) {
    console.log(err)
} finally {
    console.log('Tenha um bom dia') // esse executa independentese der certo ou não
}