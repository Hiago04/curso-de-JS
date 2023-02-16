/* If, Else if, Else */
/* Quero montar um código que:
Dê bom dia entre 5 ás 11 (11:59)
Dê boa tarde entre 12 e 18 (18:59)
Dê boa noite entre 19 e 4 (4:59)
E se por algum motivo não for nenhum desses horáriosm diga que deu tudo errado */

let hora = 3
let mensagem;

if (hora >= 5 && hora < 12){
    mensagem = 'Bom dia';
} else if (hora >= 12 && hora < 19) {
    mensagem = 'Boa tarde';
} else if  (hora >= 19 && hora < 24 || hora < 4 && hora > 0) {
    mensagem = 'Boa noite';
} else {
    mensagem = 'Deu tudo errado';
}

console.log(mensagem)