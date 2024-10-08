const Article = require('../models/Article'); // Assurez-vous que le chemin d'accès est correct

const articleController = {
    getAllArticles: async (req, res) => {
        try {
            const articles = await Article.getall();
            res.json(articles);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getArticleById: async (req, res) => {
        try {
            const article = await Article.findById(req.params.id);
            if (article) {
                res.json(article);
            } else {
                res.status(404).send('Article not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    createArticle: async (req, res) => {
        try {
            const newArticle = await Article.CreateOrUpdate(req.body);
            res.status(201).json(newArticle);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateArticle: async (req, res) => {
        try {
            const updatedArticle = await Article.CreateOrUpdate(req.body);
            res.json(updatedArticle);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteArticle: async (req, res) => {
        try {
            await Article.deleteById(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = articleController;
