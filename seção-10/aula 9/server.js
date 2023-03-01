const express = require('express');
const app = express();
const routes = require('./routes')

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
) //permite que você exiba as informações enviadas no formulário
app.use(routes)


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});