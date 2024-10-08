<script setup>

</script>

<template>
  <div class="dashboard-menu">
    <a href="#">Favorites</a>
    <a href="#">Best Seller</a>
    <a href="#">Near Me</a>
    <a href="#">Promotion</a>
    <a href="#">Top Rated</a>
    <a href="#">All</a>
  </div>
</template>

<style scoped>
.dashboard-menu {
  display: flex;
  gap: 10px;
  padding: 0.3rem 1rem;
  overflow-x: auto;
}

.dashboard-menu>a {
  text-decoration: none;
  text-align: center;
  border-radius: 20px;
  min-width: 120px;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  color: var(--darkBlack);
  background-color: var(--lightGrey);
}

.dashboard-menu>a:hover {
  background-color: var(--red);
  color: var(--lightGrey);
}

</style>