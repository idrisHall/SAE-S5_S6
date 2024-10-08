<template>
    <div class="recent-orders">
        <h2>Nos Plats</h2>
        <table>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Note</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="article in articles" :key="article.id_article">
                    <td>{{ article.Description }}</td>
                    <td>{{ article.Nom }}</td>
                    <td>{{ article.Prix }}</td>
                    <td class="stars">
                        <div class="star-rating">
                            <div class="star-rating-top" :style="{ width: getStarWidth(article.Note) }">
                                <span v-for="n in 5" :key="n" class="material-icons-sharp">star</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="close" id="close-btn">
                            <span class="material-icons-sharp">edit</span>
                        </div>
                    </td>
                </tr>
            </tbody>

        </table>

        <button class="sidebar-button">Ajouter un plat</button>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            articles: [],
        };
    },
    methods: {
        // Ajout d'une méthode pour récupérer les articles depuis l'API
        fetchArticles() {
            axios.get('http://localhost:3000/articles/')
                .then(response => {
                    // Stockez les données de l'API dans la variable articles
                    this.articles = response.data;
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des articles', error);
                });
        },
        getStarWidth(note) {
            const starPercentage = (note / 5) * 100;
            return `${Math.round(starPercentage / 10) * 10}%`;
        }
    },
    // Utilisez le hook mounted pour appeler fetchArticles lors du montage du composant
    mounted() {
        this.fetchArticles();
    },
};

</script>

<style>


</style>