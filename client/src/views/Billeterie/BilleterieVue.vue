<template>

    <div>
<!--        <header>-->
<!--        <h1>Billeterie</h1>-->
<!--        <div class="toggle">-->
<!--            <label>Normal </label>-->
<!--            <div class="toggle-btn">-->
<!--                <input type="checkbox" id="checkbox" class="checkbox">-->
<!--                <label for="checkbox" class="sub" id="suv">-->
<!--                    <div class="circle"></div>-->
<!--                </label>-->
<!--            </div>-->
<!--            <label>Etudiant</label>-->
<!--        </div>-->
<!--    </header>    -->
      <Navbar_t/>

    <div class="cards">
        <div class="card shadow">
            <ul>
                <li class="pack">Lorem ipsum</li>
                <li id="basic" class="price bottom-bar">&euro;20</li>
                <li class="bottom-bar">Lorem ipsum</li>
                <li class="bottom-bar">Lorem ipsum</li>
                <li class="bottom-bar">Lorem ipsum</li>
                <li>
                    <button class="btn">Acheter</button>
                </li>
            </ul>
        </div>
        <div class="card active">
            <ul>
                <li class="pack">Lorem ipsum</li>
                <li id="basic" class="price bottom-bar">&euro;20</li>
                <li class="bottom-bar">Lorem ipsum</li>
                <li class="bottom-bar">Lorem ipsum</li>
                <li class="bottom-bar">Lorem ipsum</li>
                <li>
                    <button class="btn active-btn">Acheter</button>
                </li>
            </ul>
        </div>
        <div class="card shadow">
            <ul>
                <li class="pack">Lorem ipsum</li>
                <li id="basic" class="price bottom-bar">&euro;20</li>
                <li class="bottom-bar">Lorem ipsum</li>
                <li class="bottom-bar">Lorem ipsum</li>
                <li class="bottom-bar">Lorem ipsum</li>
                <li>
                    <button class="btn">Acheter</button>
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>
  
  <script>
  import Navbar_t from "@/components/navbar_t.vue";

  export default {
    components:{Navbar_t},
    data() {
      return {
      };
    }
  };
  </script>
  
<style scoped>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{
    font-size: 15px;
}

body{
    background: #f7f7ff;
    font-family: "Montserrat",sans-serif;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
}


.toggle{
    margin-top: 2rem;
    color: hdl(234,14%,74%);
    display: flex;
    align-items: center;
}

.toggle-btn{
    margin: 0 1 rem;
}

.checkbox{
    display: none;
    transition: 3s;
}


.sub{
    background: linear-gradient(135deg,rgba(163,168,240,1) 0%,rgba(105,111,221,1) 100%);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 1.6rem;
    width: 3.3rem;
    border-radius: 1.6rem;
    padding: 0.3rem;
}

.circle{
    background-color: #fff;
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 50%;
}

.checkbox:checked + .sub{
    justify-content: flex-end;

}


.cards{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.card{
    background-color: #fff;
    color: hsl(233,13%,49%);
    border-radius: 0.8rem;
}

.cards .card.active{
    background: linear-gradient(135deg,rgba(163,168,240,1) 0%,rgba(105,111,221,1) 100%);
    color: #fff;
    display: flex;
    align-items: center;
    transform: scale(1.1);
    z-index: 1;
}

ul{
    margin: 2.6rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

ul li{
    list-style-type: none;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;
}

ul li.price{
    font-size: 3rem;
    color: hsl(232, 13%, 33%);
    padding-bottom: 2rem;
}

.shadow{
    box-shadow: -5px 5px 15px 1px rgba(0, 0, 0, 0.1);
}

.card.active .price{
    color: #fff;
}

.btn{
    margin-top: 1rem;
    height: 2.6rem;
    width: 13.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: linear-gradient(135deg,rgba(163,168,240,1) 0%,
    rgba(105,111,221,1) 100%);
    color: #fff;
    outline: none;
    border: 0;
    font-weight: bold;
}

.active-btn{
    background: #fff;
    color: hsl(237, 63%, 64%);
}

.bottom-bar{
    border-bottom: 2px solid hsl(240,8%,85%,0.583);
}

.card.active .bottom-bar{
    border-bottom: 2px solid hsl(24O,8%,85%,0.253);
}

.pack{
    font-size: 1.1rem;
}
  </style>
  