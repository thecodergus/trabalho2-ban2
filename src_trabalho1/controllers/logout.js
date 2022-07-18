export const logout = async (req, res) => {
    res.clearCookie('session_code')
    res.locals.usuario = {}
    res.locals.loggedIn = false
    res.redirect('/')
}
  