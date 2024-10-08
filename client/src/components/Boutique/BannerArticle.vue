<script setup>

</script>

<template>
  <div class="dashboard-banner">
    <img src="img1.jpg" alt="">
    <div class="banner-promo">
      <h1><span>50% OFF</span><br>
        Tasty Food <br> On Your Hand</h1>
    </div>
  </div>
</template>

<style scoped>
.dashboard-banner {
  width: 100%;
  height: 300px;
  position: relative;
  margin-top: 4rem;
  padding: 1rem;
  border-radius: 30px;
  cursor: pointer;
}

.dashboard-banner>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.banner-promo {
  position: absolute;
  color: var(--lightGrey);
  top: 25%;
  left: 10%;
  font-weight: 800;
}

.banner-promo>h1>span {

  color: var(--yellow);

}

</style>