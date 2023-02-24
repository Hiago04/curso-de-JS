function rand(max = 3000, min = 1000) {
    return Math.floor(Math.random() * (max - min) - min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject(new Error)
                return;
            }

            resolve(msg)
        }, tempo)
    })
}

async function executa() {
    
    try {
    const fase1 = await esperaAi('Fase 1', rand())
    console.log(fase1);

    const fase2 = await esperaAi('Fase 2', rand())
    console.log(fase2);

    const fase3 = await esperaAi(3, rand())
    console.log(fase3);

    const fase4 = await esperaAi('Fase 4', rand())
    console.log(fase4);

    } catch(e) {
        console.warn(e);
    } finally {
        console.log('EXECUTA MESMO ASSIM');
    }
}

executa()