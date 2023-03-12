exports.meuMiddlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.sucess = req.flash('sucess');
    res.locals.user = req.session.user
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