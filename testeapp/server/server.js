const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importez le middleware cors

const createDataController = require('./controllers/insererData');


const getDataController =require('./controllers/getData');
const deleteDataController =require('./controllers/deleteData');

const app = express();
const port = process.env.PORT || 5000;

// Utilisez le middleware cors
app.use(cors());


app.use(bodyParser.json());


app.use(bodyParser.json());

// Route API pour créer des données
app.post('/api/insert', createDataController);

app.delete('/api/delete/:id', deleteDataController);


app.get('/api/getData',getDataController);

// Définissez d'autres routes API ici

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
