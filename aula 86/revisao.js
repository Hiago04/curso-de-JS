function rand(max = 1000, min = 3000) {
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAe(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error);
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    }
    )
}

esperaAe('Frase 1', rand())
    .then(resolve => {
        console.log(resolve);
        return esperaAe('Frase 2', rand())
    })
    .then(resolve => {
        console.log(resolve);
        return esperaAe(3, rand())
    })
    .then(resolve => {
        console.log(resolve);
    })
    .catch(e => console.warn(e))

