const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send(
        `<form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>`
    );
});


app.get('/testes/:idUsers/', (req, res) => {
    console.log(req.params);
    res.send(req.params.idUsers);
});

app.post('/', (req, res) => {
    res.send('Recebi o form')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
})