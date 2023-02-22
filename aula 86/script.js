function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    setTimeout(() => {
        console.log(msg);
    }, tempo);
}

// o JS funciona de forma assíncrona, ele executa aleatoriamente
/* esperaAi('texto 1', rand(1, 3));
esperaAi('texto 2', rand(1, 3));
esperaAi('texto 3', rand(1, 3));
 */

function esperaAe(msg, tempo) {
    return new Promise((resolve, reject) => { //resolva isso, rejeite aquilo
        if(typeof msg !== 'string') reject(new Error)
        setTimeout(() => {
            resolve(msg);
        }, tempo);

    })
}

//then é chamado quando tem resolve() na func
//catch é chamad o quando tem reject() na func
esperaAe('Frase 1', rand(1, 3))
    .then((resposta) => { //o parâmetro automaticamente vai ser o valor passado dentro de resolve
        console.log(resposta);
        return esperaAe('Frase 2', rand(1, 3))
    })
    .then((resposta) => { //o valor retornado do then anterior vai para o parâmetro
        console.log(resposta);
        return esperaAe(3, rand(1, 3))//erro, pois o msg deve ser string
    }).then((resposta) => {
        console.log(resposta);
    }).then(() => console.log('Vou ser o último')) //se algum a cima der erro, não sera exibido
    .catch(e => { //(e) captura o erro
        console.log(e);
    })

    console.log('Isso será exibido antes do promisse');
