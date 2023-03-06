exports.meuMiddlewareGlobal = (req, res, next) => {
    console.log();
    if(req.body.cliente){
    req.body.cliente = req.body.cliente.replace('Miranda', 'Não use Miranda')
    console.log(`O que você postou ${req.body.cliente}`);
}
    console.log();
    next() //sempre que tiver um func na frente, adicione o parâmetro next e execute no final do código (next())
    //caso contrário a próxima func não sera executada
}