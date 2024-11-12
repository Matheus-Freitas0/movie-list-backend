const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config');
const PlanRoutes = require('./routes/plans');
const DestinationRoutes = require('./routes/destinations');
const PhotoRoutes = require('./routes/photos');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api/plans', PlanRoutes);
app.use('/api/destinations', DestinationRoutes);
app.use('/api/photos', PhotoRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log('Banco de dados sincronizado!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
