const express = require('express');
const app = express();


app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
) //permite que você exiba as informações enviadas no formulário

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?/:params?', (req, res) => { //req.params = parametros
    //para criar um parâmetro "/:parametro?"
    // console.log(req.params);
    // res.send(req.params)
    console.log(req.query);
    res.send(req.query)
    // http://localhost:3000/testes/?nome=Luiz&sobrenome=Miranda -> query são o que fica depois do ponto de interrogação "?"
})

app.post('/', (req, res) => {
    res.send(`O que você me enviou foi ${req.body.nome}`)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});