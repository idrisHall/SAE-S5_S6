
<template>
    <header class="header">
      <a href="#" class="logo">FoodHub</a>
      <nav class="navbar">
        <router-link to="/">
          <a>Home<span></span></a>
        </router-link>
        <router-link to="/boutique">
          <a>Boutique<span></span></a>
        </router-link>
        <router-link to="/billeterie">
          <a>Billeterie<span></span></a>
        </router-link>
        <router-link to="/stand">
          <a>Stand<span></span></a>
        </router-link>
        <router-link to="/contact">
          <a>Contact<span></span></a>
        </router-link>
        <router-link to="/login">
          <a><i class="fa-solid fa-user"></i><span></span></a>
        </router-link>
      </nav>

    </header>
</template>
  
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      menuItems: [
        { icon: 'home-outline', text: 'Home' },
        { icon: 'person-outline', text: 'Profile' },
        { icon: 'chatbubble-outline', text: 'Message' },
        { icon: 'camera-outline', text: 'Photos' },
        { icon: 'settings-outline', text: 'Settings' },
      ],
    };
  },
  methods: {
    setActiveIndex(index) {
      this.activeIndex = index;
    },
  },
};
</script>
  
<style>
</style>