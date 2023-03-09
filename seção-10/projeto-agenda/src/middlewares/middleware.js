exports.meuMiddlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.sucess = req.flash('sucess');
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render('erro.ejs');
    }
    next()
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
}