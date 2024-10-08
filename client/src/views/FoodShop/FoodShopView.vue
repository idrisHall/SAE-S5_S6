
<template>
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
    <Navbar_t/>

      <div class="content-container">
        <filtre-article class="filter-panel"></filtre-article>

      <div class="box">
            <input type="checkbox" id="cart">
            <label for="cart" class="label-cart"><span class="fas fa-shopping-cart"></span></label>
            <div class="dashboard">
              <BannerArticle/>
              <TrieurArticle/>
              <ArticlePlat/>
              <PanierComp/>
            </div>
      </div>


        </div>
    </div>
</template>
  
<script>

import axios from 'axios';
import FiltreArticle from "@/components/Boutique/FiltreArticle.vue";
import Navbar_t from "@/components/navbar_t.vue";
import PanierComp from "@/components/Boutique/PanierComp.vue";
import ArticlePlat from "@/components/Boutique/ArticlePlat.vue";
import TrieurArticle from "@/components/Boutique/TrieurArticles.vue";
import BannerArticle from "@/components/Boutique/BannerArticle.vue";



export default {
  components: {
    FiltreArticle,
    Navbar_t,
    PanierComp,
    ArticlePlat,
    TrieurArticle,
    BannerArticle,
  },
    data() {
        return {
            items: [
            ],
            orders: [
            ],
            subtotal: '',
            tax: '',
            total: '',
            isDarkMode: false,
        };
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            document.body.classList.toggle('dark-mode-variables');
        },
        fetchArticles() {
            axios.get('http://localhost:3000/articles/')
                .then(response => {
                    // Stockez les données de l'API dans la variable articles
                    this.items = response.data;
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des articles', error);
                });
        },
        addToOrders(item) {
            this.orders.push({ ...item, quantity: 1 }); // Adjust as needed
            this.updateTotals();
        },
        removeFromOrders(index) {
            this.orders.splice(index, 1);
            this.updateTotals();
        },
        updateTotals() {
            let subtotal = this.orders.reduce((sum, order) => {
                let price = parseFloat(order.price.replace('$', '')); // Assuming price is a string like '$15.99'
                return sum + price * order.quantity; // Multiply by quantity if available
            }, 0);

            let taxRate = 0.10; // 10% tax, adjust as needed
            let tax = subtotal * taxRate;

            // Assuming deliveryFee is a number, if it's a string, parse it similar to price
            let total = subtotal + tax;

            // Update the data properties
            this.subtotal = subtotal.toFixed(2); // Formats to a string with 2 decimal places
            this.tax = tax.toFixed(2);
            this.total = total.toFixed(2);
        },
    },
    mounted() {
        this.fetchArticles();
    },
    // Additional methods for handling orders can be added here
};
</script>
  
<style >

.content-container {
  display: flex;
  justify-content: space-between;
}

.filter-panel {
  width: 20%; /* Ajustez selon vos besoins */
  padding: 20px; /* Ajustez selon vos besoins */
  /* Autres styles pour le filtre */
}

.box {
  width: 80%; /* Ajustez selon vos besoins */
  /* Styles existants pour la box */
}

:root {
    --mainColor: #f6f8fa;
    --darkBlack: #2d2f31;
    --darkGrey: #61666b;
    --grey: #d5d5d5;
    --lightGrey: #f2f2f2;
    --yellow: #fecb40;
    --red: #df113c;
}
.dark-mode {
    --mainColor: #121212; /* Couleur de fond sombre */
    --darkBlack: #ffffff; /* Texte en couleur sombre */
    --darkGrey: #a1a1a1; /* Autres couleurs sombres */
    --grey: #7d7d7d;
    --lightGrey: #333333; /* Couleur de fond légère */
    --yellow: #fecb40;
    --red: #ff3344;
}

* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: "Noto Sans JP", sans-serif;
}

body {
    width: 100%;
    height: auto;
    color: var(--darkBlack);
}

.header {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 80px;
    background: var(--darkBlack);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}

.box{
    margin-top: 60px;
}

.logo {
    font-size: 30px;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
}

nav a {
    position: relative;
    font-size: 1.1em;
    color: #fff;
    text-decoration: none;
    padding: 6px 20px;
    transition: .5s;
}

nav a:hover {
    color: #0ef;
}

nav a span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-bottom: 2px solid #0ef;
    border-radius: 15px;
    transform: scale(0) translateY(50px);
    opacity: 0;
    transition: .5s;
}

nav a:hover span {
    transform: scale(1) translateY(0);
    opacity: 1;
}

p {
    font-size: 14px;
}

.label-cart {
    position: fixed;
    top: 2.9rem;
    right: 1.8rem;
    z-index: 400;
    cursor: pointer;
    color: var(--mainColor);
}

.dashboard {
    height: 100%;
    width: 100%;
    padding-right: 360px;
    padding-left: 60px;
}



</style>