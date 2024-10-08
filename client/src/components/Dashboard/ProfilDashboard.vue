<template>
    <div class="article-form">
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="nom">Nom:</label>
                <input type="text" id="nom" v-model="article.Nom">
            </div>
            <div>
                <label for="prix">Prix:</label>
                <input type="number" id="prix" v-model="article.Prix">
            </div>
            <div>
                <label for="description">Description:</label>
                <textarea id="description" v-model="article.Description"></textarea>
            </div>
            <div>
                <label for="quantite">Quantité:</label>
                <input type="number" id="quantite" v-model="article.Quantité">
            </div>
            <div>
                <label for="pays">Pays:</label>
                <select id="pays" v-model="article.id_pays">
                    <option v-for="pays in paysList" :key="pays.id_pays" :value="pays.id">{{ pays.nom }}</option>
                </select>
            </div>
            <div>
                <label for="categorie">Catégorie:</label>
                <select id="categorie" v-model="article.id_categorie">
                    <option v-for="categorie in categoriesList" :key="categorie.id_categorie" :value="categorie.id">{{
                        categorie.nom
                    }}
                    </option>
                </select>
            </div>
            <!-- <div class="form-group">
                <label for="image">Image:</label>
                <input type="file" id="image" @change="handleFileUpload">
            </div>
            <div v-if="previewImage" class="image-preview">
                <img :src="previewImage" alt="Prévisualisation de l'image">
            </div> -->


            <button type="submit">Soumettre</button>
        </form>
    </div>
</template>


<script scoped>
import axios from 'axios';

export default {
    data() {
        return {
            article: {
                Nom: '',
                Prix: null,
                Description: '',
                Quantité: 0,
                id_pays: null,
                id_categorie: null
            },
            paysList: [], // Liste des pays à charger depuis l'API ou une source de données
            categoriesList: [], // Liste des catégories à charger de même
            previewImage: '',
        };
    },
    methods: {
        handleSubmit() {
            // Logique de soumission du formulaire
            console.log(this.article);
        },
        loadArticleData(articleId) {
            axios.get('http://localhost:3000/articles/' + articleId)
                .then(response => {
                    // Supposons que response.data contient les données de l'article
                    const data = response.data;
                    this.article.Nom = data.Nom;
                    this.article.Prix = data.Prix;
                    this.article.Description = data.Description;
                    this.article.Quantité = data.Quantité;
                    this.article.id_pays = data.id_pays;
                    this.article.id_categorie = data.id_categorie;
                })
                .catch(error => {
                    console.error('Erreur lors du chargement des données de l\'article', error);
                });
        },
        loadPaysAndCategories() {
            // Logique pour charger les listes de pays et catégories
            // Exemple : axios.get('/api/pays')...
        },
    },
    props: {
        articleId: {
            type: Number,
            default: null
        }
    },

    mounted() {
        this.loadPaysAndCategories();
        if (this.articleId) {
            this.loadArticleData(this.articleId);
        }
        console.log("L'ID reçu est :", this.articleId);
    }
};
</script>

<style scoped>
.article-form {
    /* Styles spécifiques au formulaire en utilisant des variables CSS existantes */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-white);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    box-shadow: var(--box-shadow);
    /* Autres styles spécifiques */
}

.article-form input,
.article-form textarea,
.article-form select {
    /* Styles pour les champs de formulaire */
    border: 1px solid var(--color-dark-variant);
    border-radius: var(--border-radius-1);
    padding: 8px;
    margin-bottom: 10px;
    width: 120%;
    /* Ajuster la largeur selon le design souhaité */
}

.article-form button {
    /* Style du bouton de soumission */
    background-color: var(--color-dark-variant);
    color: var(--color-white);
    border: none;
    border-radius: var(--border-radius-1);
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.article-form button:hover {
    background-color: var(--color-dark);
}

.form-group {
    margin-bottom: 15px;
    /* Espace entre les groupes de formulaire */
}


.article-form label {
    display: block;
    margin-bottom: 5px;
}

/* Autres styles spécifiques au formulaire */
</style>

  