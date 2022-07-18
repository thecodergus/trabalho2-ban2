export const onlyAdmin = async (_, res, next) => {
    if (res.locals.usuario?.tipo && res.locals.usuario.tipo === 1) {
        return next()
    }
    return res.status(403).send('Forbidden')
}
