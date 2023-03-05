const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Um título de teste',
    descricao: 'Uma descrição teste'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));


exports.paginaInicial = (req, res, next) => {
    res.render('index')
    console.log(`'pagina inicial' Olha o que tem na req.session.nome ${req.session.nome}`);
    next()
};

exports.trataPost = (req, res) => {
    res.send(req.body)
}

