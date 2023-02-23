function rand(min = 1, max = 3) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg);
        }, tempo);

    })
}

/* esperaAi('Fase 1', rand())
    .then(valor => {
        console.log(valor)
        return esperaAi('Fase 2', rand())
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', rand())
    })
    .then(fase => {
        console.log(fase);
        return fase
    })
    .then(fase => {
        console.log(`terminamos na ${fase}`);
    })
    .catch(e => {
        console.log('ERRO');
    }); */

async function executa() {
    try {
        const fase1 = await esperaAi(`Fase 1`, rand())
        console.log(fase1);

        const fase2 = await esperaAi(2, rand())
        console.log(fase2);

        const fase3 = await esperaAi(`Fase 3`, rand())
        console.log(fase3);

        console.log(`Terminamos na ${fase3}`);
    } catch(e) {
        console.log(e);
    } finally {
        console.log('EXECUTA MESMO ASSIM');
    }
    
};
executa()

// pending -> pendente: se você não usar await ou then em uma func promise, ela vai retornar que está pendente
// fullfilled -> resolvida: quando for resolvida, normal
// reject -> rejeitada: quando for rejteitada