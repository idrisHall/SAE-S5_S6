<template>
  <div class="dashboard-content">
    <!-- Dynamic food cards will be rendered here -->
    <div class="dashboard-card" v-for="item in items" :key="item.id" @click="addToOrders(item)">
      <img :src="item.image" class="card-image">
      <div class="card-detail">
        <h4>{{ item.Nom }}<span>{{ item.Prix }}</span></h4>
        <p>{{ item.Description }}</p>
        <p>{{ item.id_pays }}</p>
        <p>{{ item.id_groupe }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['items'],
  mounted() {
    console.log(this.items)
  }
}
</script>


<style scoped>
.dashboard-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 0.5rem 1rem 1rem 1rem;
}

.dashboard-card {
  background-color: var(--mainColor);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
}

.dashboard-card:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 15px;
}

.card-detail {
  padding: 10px;
}

.card-detail>h4>span {
  float: right;
}

.card-time {
  color: var(--darkGrey);
  font-size: 0.8rem;
  padding-top: 10px;
}

</style>