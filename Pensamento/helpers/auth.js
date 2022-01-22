//proteção das telas que se o usuario não tiver logado
module.exports.checkAuth = function (req, res, next) {
    const userId = req.session.userid

    if (!userId) {
        res.redirect('/login')
    }

    next()
}