// controllers/recupererData.js

const pool = require('../Connect');

// Fonction pour récupérer les données depuis la base de données
async function getData(req, res) {
  try {
    const query = 'SELECT * FROM test'; // Remplacez "votretable" par le nom de votre table
    const result = await pool.query(query);

    res.json(result.rows); // Renvoie les données au format JSON
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des données' });
  }
}

module.exports = getData;
