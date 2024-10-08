const fs = require('fs');
const mysql = require('mysql2');

// Paramètres de connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'sql_foodhub'
});

// Chemin du fichier JSON
const filePath = './pays.js';

// Lire le fichier JSON
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Erreur lors de la lecture du fichier:", err);
        return;
    }

    // Parser les données JSON
    const countries = JSON.parse(data).countries;

    // Établir la connexion à la base de données
    connection.connect();

    // Générer et exécuter les instructions SQL
    countries.forEach((country, index) => {
        const sql = `INSERT INTO Pays (Nom_Pays, Continent) VALUES ('${country.name.replace("'", "''")}', '${country.continent}');`;
        connection.query(sql, (err, results) => {
            if (err) throw err;
            console.log(`Ligne insérée avec l'ID: ${results.insertId}`);
        });
    });

    // Fermer la connexion
    connection.end();
});
