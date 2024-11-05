import express from 'express'
import { urlencoded, json } from "body-parser"
import path from 'path'
import sequelize from './config/database';
const app = express()
const port = 3000

app.use(urlencoded({ extended: true }))
app.use(json())

app.set('view engine', 'ejs')
app.set("views", "src/views")

app.use(express.static(path.join(__dirname, 'src/public')));

app.use('/movieList', )

sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado')
        app.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`)
        })
    })
    .catch(err => console.error('Erro ao sincronizar banco de dados:', err))