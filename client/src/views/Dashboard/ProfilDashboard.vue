<template>
    <div class="article-form">
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="nom">Nom:</label>
                <input type="text" id="nom" v-model="user.Nom">
            </div>
            <div>
                <label for="prénom">Prix:</label>
                <input type="text" id="prénom" v-model="user.Prénom">
            </div>
            <div>
                <label for="email">email:</label>
                <input type="email" id="email" v-model="user.mail">
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


<script>

export default {
    data() {
        return {
        };
    },
    methods: {
    },
    mounted() {
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

  