
const { Pool } = require('pg'); // Importez le module PostgreSQL

// Configuration de la connexion à la base de données
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testreact',
  password: 'mdpProm15',
  port: 5432,
});

module.exports = pool;