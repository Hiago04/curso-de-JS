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


app.use(express.urlencoded({extend:true}))

//params: http://localhost:3000/testes/123/456
//query: http://localhost:3000/testes/?profile=12&user=joao
app.get('/testes/:idUsers?/:param?', (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

app.post('/', (req, res) => {
    res.send(`O que eu recebi foi ${req.body.nome}`)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
})