<template>
  <div class="filter-container">
    <h3>Filtrer les Articles</h3>

    <div class="filter-group">
      <label for="category-select">Catégorie:</label>
      <select id="category-select" v-model="selectedCategory" @change="onFilterChange">
        <option value="">Toutes les catégories</option>
        <!-- Autres catégories -->
      </select>
    </div>

    <div class="filter-group">
      <label for="country-select">Pays:</label>
      <select id="country-select" v-model="selectedCountry" @change="onFilterChange">
        <option value="">Tous les pays</option>
        <!-- Autres pays/continents -->
      </select>
    </div>

    <div class="filter-group">
      <label for="group-select">Groupe Culinaire:</label>
      <select id="group-select" v-model="selectedGroup" @change="onFilterChange">
        <option value="">Tous les groupes</option>
        <!-- Autres groupes -->
      </select>
    </div>

    <div class="filter-group">
      <label>Prix: {{ priceRange[0] }} - {{ priceRange[1] }}</label>
      <vue-slider v-model="priceRange" :min="0" :max="150" :enable-cross="false"></vue-slider>
    </div>

  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css'

export default {
  components:{
    // eslint-disable-next-line vue/no-unused-components
    VueSlider
  },
  data() {
    return {
      priceRange: [0, 150]
    };
  },
  methods: {
    onFilterChange() {
      // Méthode pour gérer les changements de filtre
      // Emit un événement avec tous les critères de filtrage
      this.$emit('filter-change', {
        category: this.selectedCategory,
        country: this.selectedCountry,
        group: this.selectedGroup,
        price: this.priceRange
      });
    }
  }
};
</script>

<style>
.filter-container {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 500px;
}

.filter-group {
  margin-bottom: 15px;
}

.filter-group label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.filter-group select, .filter-group input[type=range] {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

input[type=range] {
  -webkit-appearance: none;
  appearance: none;
  background: #ddd;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

input[type=range]:hover {
  opacity: 1;
}

</style>