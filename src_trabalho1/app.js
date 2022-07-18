import express from 'express'
import routes from './routes.js'
import path from 'path'
import cookieParser from 'cookie-parser'
import datefns from 'date-fns'

const app = express()

app.set('view engine', 'ejs')
app.use((_, res, next) => {
    res.locals.datefns = datefns
    next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(path.resolve(), 'public')))

app.use(cookieParser())

app.use('/', routes)

app.listen(8000)