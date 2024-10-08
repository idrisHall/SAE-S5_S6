<template>
    <div class="article-form">
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="nom">Model</label>
                <select id="files" v-model="selectedFile">
                    <option disabled value="">Sélectionnez un fichier</option>
                    <option v-for="file in files" :key="file">{{ file }}</option>
                </select>
            </div>
            <div>
                <label for="prénom">Position x</label>
                <input type="number" id="prénom">
            </div>
            <div>
                <label for="prénom">Position y</label>
                <input type="number" id="prénom">
            </div>
            <div>
                <label for="prénom">Position z</label>
                <input type="number" id="prénom">
            </div>
            <div>
                <label for="email">Taille:</label>
                <input type="number" id="email">
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
            files: [],
            selectedFile: "",
        };
    },
    methods: {
        async loadFiles() {
            try {
                const response = await fetch("/stand/stand"); // L'URL vers le répertoire public/stand
                if (response.ok) {
                    const htmlContent = await response.text();
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(htmlContent, "text/html");

                    const fileLinks = doc.querySelectorAll("a");
                    const fileNames = Array.from(fileLinks).map((link) => link.textContent);

                    this.files = fileNames;
                } else {
                    console.error("Erreur lors du chargement des fichiers.");
                }
            } catch (error) {
                console.error("Une erreur s'est produite : ", error);
            }
        },
    },
    mounted() {
        this.loadFiles();
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

  