// createData.js

const pool = require('../Connect');
// Fonction pour créer des données dans la base de données
async function insererData(req, res) {
  const { nom, courriel } = req.body; // Supposons que les données viennent d'une requête POST

  try {
    const query = 'INSERT INTO test (id,nom, courriel) VALUES (default,$1, $2)';
    await pool.query(query, [nom, courriel]);
    res.status(201).json({ message: 'Données créées avec succès' });
  } catch (error) {
    console.error('Erreur lors de la création des données :', error);
    res.status(500).json({ error: 'Erreur lors de la création des données' });
  }
}

module.exports = insererData;
