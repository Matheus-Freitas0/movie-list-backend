const express = require('express');
const sequelize = require('./config/database');
const routes = require('./routes/movies');
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  
    next();
  });

app.use('/movieList', routes)

sequelize.sync({ force: true})
    .then(() => {
        console.log('Banco de dados sincronizado')
        app.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`)
        })
    })
    .catch(err => console.error('Erro ao sincronizar banco de dados:', err))