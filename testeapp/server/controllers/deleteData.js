// controllers/recupererData.js
const pool = require('../Connect');
// Fonction pour récupérer les données depuis la base de données
async function deleteData(req, res) {
    const { id } = req.params; // Supposons que les données viennent d'une requête POST

    try {
      const query = 'DELETE FROM test where id=$1';
      await pool.query(query, [id]);
      res.status(201).json({ message: 'Données supprimé avec succès' });
    } catch (error) {
      console.error('Erreur lors de la suppression des données :', error);
      res.status(500).json({ error: 'Erreur lors de la suppression des données' });
    }
}

module.exports = deleteData;
