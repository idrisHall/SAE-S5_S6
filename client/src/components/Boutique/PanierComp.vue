<template>
  <div class="dashboard-order">
    <h1>Votre Panier</h1>
    <div class="order-wrapper">
      <!-- Dynamic order cards will be rendered here -->
      <div class="order-card" v-for="order in orders" :key="order.id">
        <img :src="order.image" class="order-image">
        <div class="order-detail">
          <p>{{ order.description }}</p>
          <i class="fas fa-times" @click="removeFromOrders(index)"></i> <input type="text"
                                                                               :value="order.quantity">
        </div>
        <h4 class="order-price">{{ order.price }}</h4>
      </div>
    </div>
    <hr class="divider">
    <div class="order-total">
      <p>Total<span>{{ subtotal }}</span></p>
      <p>Tva (20%)<span>{{ tax }}</span></p>
      <div class="order-promo">
        <input type="text" class="input-promo" placeholder="Code Promo">
        <button class="button-promo">Entrer</button>
      </div>
      <hr class="divider">
      <p>Total <span>{{ total }}</span></p>
    </div>
    <button class="checkout">
      Passez Commande
    </button>
  </div>
</template>

<script>
export default {
  props: {
    orders: Array,
    subtotal: Number,
    tax: Number,
    total: Number
  },
  methods: {
    removeFromOrders(index) {
      this.$emit('remove-order', index);
    },
    // Ajoutez d'autres méthodes si nécessaire
  },
  // ...
};
</script>


<style>
.dashboard-order {
  width: 340px;
  min-height: 100%;
  position: fixed;
  top: 8rem;
  right: 0;
  padding: 0.5rem 1.5rem;
  background-color: var(--mainColor);
  z-index: 3;
}
.dashboard-order>h3 {
  padding: 10px 0;
}
.order-adress>h4 {
  line-height: 2;
}
.order-time {
  font-size: 0.8rem;
  color: var(--darkGrey);
}
.order-wrapper {
    height: 180px;
    width: 100%;
    overflow-y: scroll;
    margin: 20px 0;
  }
.order-wrapper::-webkit-scrollbar {
    width: 7px;
  }
.order-wrapper::-webkit-scrollbar-track {
    background-color: var(--lightGrey);
    border-radius: 20px;
  }
.order-wrapper::-webkit-scrollbar-thumb {
    background-color: var(--darkGrey);
    border-radius: 20px;
  }
.order-card {
    display: grid;
    grid-template-columns: 0.6fr 1fr 0.5fr;
    padding: 10px 0;
    gap: 5px;
    justify-content: space-around;
    align-items: flex-start;
  }
.order-image {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 15px;
  }
.order-detail>input {
    width: 35px;
    height: 35px;
    text-align: center;
    border: 2px solid var(--grey);
    border-radius: 10px;
    background-color: transparent;
    margin-left: 10px;
  }
.order-total>p {
  padding: 10px 0;
}
.order-total>p>span {
  float: right;
  font-weight: 600;
}
.order-promo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--lightGrey);
  border: 2px solid var(--grey);
  border-radius: 10px;
  height: 45px;
  padding: 0 5px;
  margin: 5px 0 10px 0;

}
.input-promo {
  height: 100%;
  background-color: transparent;
  border: none;
}
.button-promo {
  float: right;
  background-color: var(--yellow);
  border: none;
  border-radius: 5px;
  height: 80%;
  width: 100%;
  cursor: pointer;
}
.checkout {
  width: 100%;
  height: 40px;
  text-align: center;
  background-color: var(--red);
  border: none;
  border-radius: 20px;
  color: var(--lightGrey);
  cursor: pointer;
}
.checkout:hover {
  text-transform: uppercase;
  font-weight: 600;
}
#cart {
  display: none;
}
#cart:checked~.label-cart {
  color: var(--red)
}
#cart:checked~.dashboard {
  padding-right: 10px;
}
#cart:checked~.dashboard-order {
  display: none;
}
#cart:checked~.logo {
  padding-right: 0px;
}
.divider {
  width: 100%;
  border: 1px dashed var(--grey);
}
</style>
