exports.paginaInicial = (req, res, next) => {
    
    /* Mesmo que eu apague, 
    os dados  ficarão salvos por 7 dias   */
    // req.session.usuario = {
    //     nome: `Luiz`, logado: true
    // }; 
    console.log(req.session.usuario);


    /* Quando você mandar, os dados
    só vão poder ser utilizados mais
    uma vez */
    // req.flash('info', 'Olá Mundo!');
    // req.flash('error', 'errooou!');
    // req.flash('sucess', 'suuucesso!');
    console.log(req.flash('info'), req.flash('error'), req.flash('sucess'));


    res.render('index')
    return
};

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}

