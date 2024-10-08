const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./config/database'); // Assurez-vous que le chemin est correct
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const session = require('express-session');

const articleRoutes = require('./routes/articleRoutes');
const categorieRoutes = require('./routes/categorieRoutes');
const paysRoutes = require('./routes/paysRoutes');
const userRoutes = require('./routes/utilisateurRoutes')
const roleRoutes = require('./routes/roleRoutes')




dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

require('./swagger')(app); // Assurez-vous que le chemin est correct

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 2 * 60 * 60 * 1000, // 2 heures
        path: '/', // Définissez le chemin sur '/'
    }
}));

const corsOptions = {
    origin: 'http://localhost:8080', // Remplacez par l'origine de votre frontend
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());


// Routes pour les articles
app.use('/articles', articleRoutes);
app.use('/categories', categorieRoutes);
app.use('/pays', paysRoutes);
app.use('/user', userRoutes);
app.use('/roles', roleRoutes);




// Tester la connexion à la base de données
sequelize.authenticate()
    .then(() => console.log('Connexion à la base de données réussie.'))
    .catch(err => console.error('Impossible de se connecter à la base de données:', err));


app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});
