const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');
const {meuMiddlewareGlobal} = require('./src/middlewares/middleware')


app.use(express.urlencoded({extended: true})); //permite que você exiba as informações enviadas no formulário

app.use(express.static(path.resolve(__dirname, 'public')));
//http://localhost:3000/teste.txt -> chamei o arquivo a partir da pasta public e exibi o teste.txt na tela, chamando diretamente na url

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')

//nossos próprios 
app.use(meuMiddlewareGlobal)
app.use(routes)


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});