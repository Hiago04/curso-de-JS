function rand(min = 1000, max = 3000) {
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') {
            reject('CAI NO ERRO');
            return;
        }

        setTimeout(() => {
            resolve(msg);
        }, tempo);

    })
}

//Promise.all Promise.race Promise.resolve Promise.reject
//Promise.all
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', rand()),
    esperaAi('Promise 2', rand()),
    esperaAi('Promise 3', rand()),
    'Último valor'
]

Promise.all(promises) //executa todos as func na ordem que você inseriu
    .then((valor) => {
        console.log(valor);
    })
    .catch((erro) => {
        console.log(erro);
    })


    const promises2 = [
        esperaAi('Promise 1', 1000),
        esperaAi('Promise 2', 500),
        esperaAi('Promise 3', 2000)
    ]

//Promise.resolve -> mostra a primeira que foi executada e para as demais
Promise.race(promises2)
    .then((valor) => {
        console.log(valor);
    })
    .catch(e => {
        console.log(e);
    })

//Promise.resolve
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache')
       } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e))


//Promise.reject
function baixaPage() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache')
       } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPage()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(`"${e}", não está disponível`))
