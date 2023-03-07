exports.meuMiddlewareGlobal = (req, res, next) => {
    res.locals.umVariavelLocal    = 'Este é o valor da variável local.' 
    next() 
}