exports.paginaInicial = (req, res, next) => {

    res.render('index', { //renderiza html
        titulo: 'Este será o <span style="color:red"> título </span>da página',
        numeros: [0, 2, 3, 4, 5]
    });

    return
};

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}

