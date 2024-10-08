<template>
<div class="container">

    
    <div class="content">
            <div>Nos</div>
            <div>Prestataire</div>
            <button>En connaitre plus</button>
    </div>

    <input type="radio" name="slider" class="d-none" id="s1" checked>
    <input type="radio" name="slider" class="d-none" id="s2">
    <input type="radio" name="slider" class="d-none" id="s3">
    <input type="radio" name="slider" class="d-none" id="s4">
    <input type="radio" name="slider" class="d-none" id="s5">

    <div class="cards">
        <label for="s1" id="slide1">
            <div class="card">
                <div class="image">
                    <img src="img/1.png" alt="">
                    <div class="dots">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div class="infos">
                    <span class="name">Prestataire 1</span>
                    <span class="lorem">Lorem ipsum dolor sit amet, sit amet adipiscing elit. Aenean vel ansd . Nullam
                        lorem. Nulla eu
                        sodales</span>
                </div>
                <a href="/contact" class="btn-contact">details</a>
                <div class="socials">
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                    <font-awesome-icon icon="fa-solid fa-heart" />
                    <font-awesome-icon icon="fa-solid fa-bookmark" />
                    <font-awesome-icon icon="fa-solid fa-share-nodes" />
                </div>
            </div>
        </label>

        <label for="s2" id="slide2">
            <div class="card">
                <div class="image">
                    <img src="img/2.png" alt="">
                    <div class="dots">
                        <div class="dot1"></div>
                        <div class="dot2"></div>
                        <div class="dot3"></div>
                    </div>
                </div>
                <div class="infos">
                    <span class="name">Prestataire 2</span>
                    <span class="lorem">Lorem ipsum dolor sit, adipiscing elit. Aenean vel sit ansd . Nullam
                        lorem. Nulla eu
                        sodales karma stellus</span>
                </div>
                <a href="/contact" class="btn-contact">details</a>
                <div class="socials">
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                    <font-awesome-icon icon="fa-solid fa-heart" />
                    <font-awesome-icon icon="fa-solid fa-bookmark" />
                    <font-awesome-icon icon="fa-solid fa-share-nodes" />
                </div>
            </div>
        </label>

        <label for="s3" id="slide3">
            <div class="card">
                <div class="image">
                    <img src="img/3.png" alt="">
                    <div class="dots">
                        <div class="dot1"></div>
                        <div class="dot2"></div>
                        <div class="dot3"></div>
                    </div>
                </div>
                <div class="infos">
                    <span class="name">Prestataire 3</span>
                    <span class="lorem">Lorem ipsum dolor, sit amet let kar adipiscing. Aenean vel velit sit ansd . Nullam
                        lorem. Nulla karma stellus</span>
                </div>
                <a href="/contact" class="btn-contact">details</a>
                <div class="socials">
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                    <font-awesome-icon icon="fa-solid fa-heart" />
                    <font-awesome-icon icon="fa-solid fa-bookmark" />
                    <font-awesome-icon icon="fa-solid fa-share-nodes" />
                </div>
            </div>
        </label>

        <label for="s4" id="slide4">
            <div class="card">
                <div class="image">
                    <img src="img/4.png" alt="">
                    <div class="dots">
                        <div class="dot1"></div>
                        <div class="dot2"></div>
                        <div class="dot3"></div>
                    </div>
                </div>
                <div class="infos">
                    <span class="name">Prestataire 4</span>
                    <span class="lorem">Lorem ipsum dolor sit, sit amet elit. Aenean sit amet sit amet vel velit sit ansd. Nulla eu
                        sodales stellus</span>
                </div>
                <a href="/contact" class="btn-contact">details</a>
                <div class="socials">
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                    <font-awesome-icon icon="fa-solid fa-heart" />
                    <font-awesome-icon icon="fa-solid fa-bookmark" />
                    <font-awesome-icon icon="fa-solid fa-share-nodes" />
                </div>
            </div>
        </label>

        <label for="s5" id="slide5">
            <div class="card">
                <div class="image">
                    <img src="img/5.png" alt="">
                    <div class="dots">
                        <div class="dot1"></div>
                        <div class="dot2"></div>
                        <div class="dot3"></div>
                    </div>
                </div>
                <div class="infos">
                    <span class="name">Prestataire 5</span>
                    <span class="lorem">Lorem ipsum sit amet, sit amet elit. Aenean vel velit ansd . Nullam
                        lorem. Nulla eu
                        sodales stellus</span>
                </div>
                <a href="/contact" class="btn-contact">details</a>
                <div class="socials">
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                    <font-awesome-icon icon="fa-solid fa-heart" />
                    <font-awesome-icon icon="fa-solid fa-bookmark" />
                    <font-awesome-icon icon="fa-solid fa-share-nodes" />
                </div>
            </div>
        </label>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200;300;400;600;700&display=swap');

body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFDD0;
    overflow-x: hidden;
    font-family: 'Urbanist', sans-serif;
}

a {

    text-decoration: none;
}

input {

    display: none;
}

.container {
    display: flex;
    transform-style: preserve-3d;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 110vh;
    padding-bottom: 150px;
    

}

.cards {

    position: sticky;
    height: 500px;
    width: 430px;
    margin-bottom: 20px;
    perspective: 1000px;
    transform-style: preserve-3d;
}

.cards label {

    position: absolute;
    width: 430px;
    left: 0;
    right: 0;
    margin: auto;
    cursor: pointer;
    transition: transform 0.55s ease;
}

.cards .card {

    position: relative;
    height: 100%;
    background-color: #808000;
    border-radius: 10px;
    padding: 30px 35px;
}

.card .image {

    display: flex;
    justify-content: space-between;
}

.card .image img {

    border-radius: 5px;
    box-shadow: 15px 15px 40px rgba(0, 0, 0, 50%);
    margin-top: 23px;
    width: 86%;
    height: 220px;
    object-fit: cover;
}

.card .image .dots {

    text-align: center;
}

.dots div {

    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.dots div:nth-child(1) {

    background-color: var(--current-color1);
}

.dots div:nth-child(2) {

    background-color: #5B85F9;
}

.dots div:nth-child(3) {

    background-color: #000;
}

.card .infos {

    display: block;
    text-align: end;
    padding-top: 60px;
}

.infos span {

    display: block;
}

.infos .name {

    font-size: 30px;
    color: var(--current-color1);
    letter-spacing: 8px;
    margin-bottom: 20px;
    padding-left: 25%;
    transition: all .6s ease;
}

.infos .lorem {

    font-size: 15.5px;
    color: #ECEAED;
    letter-spacing: 3px;
}

.card .btn-contact {

    width: 100%;
    height: 60px;
    margin: 35px auto;
    border-radius: 5px;
    background-color: var(--current-color1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 25px;
    letter-spacing: 10px;
    font-weight: 700;
    transition: all .7s ease;
}

.card .socials {

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
}

.socials i {

    font-size: 25px;
    transition: all .7s ease;
    color: var(--current-color2);
}

#s1:checked~.cards #slide4,
#s2:checked~.cards #slide5,
#s3:checked~.cards #slide1,
#s4:checked~.cards #slide2,
#s5:checked~.cards #slide3 {
    box-shadow: 0 15px 35px 0 rgba(0, 0, 0, 45%);
    transform: translate3d(-70%, 0, -220px);
    --current-color1: #ECEAED;
    --current-color2: #404457;
}

#s1:checked~.cards #slide5,
#s2:checked~.cards #slide1,
#s3:checked~.cards #slide2,
#s4:checked~.cards #slide3,
#s5:checked~.cards #slide4 {
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 45%);
    transform: translate3d(-35%, 0, -120px);
    --current-color1: #ECEAED;
    --current-color2: #404457;
}

#s1:checked~.cards #slide1,
#s2:checked~.cards #slide2,
#s3:checked~.cards #slide3,
#s4:checked~.cards #slide4,
#s5:checked~.cards #slide5 {
    box-shadow: 0 25px 50px 0 rgba(0, 0, 0, 50%);
    transform: translate3d(0, 0, 0);
    --current-color1: #fad00c;
    --current-color2: #ECEAED;
}

#s1:checked~.cards #slide2,
#s2:checked~.cards #slide3,
#s3:checked~.cards #slide4,
#s4:checked~.cards #slide5,
#s5:checked~.cards #slide1 {
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 45%);
    transform: translate3d(35%, 0, -120px);
    --current-color1: #ECEAED;
    --current-color2: #404457;
}

#s1:checked~.cards #slide3,
#s2:checked~.cards #slide4,
#s3:checked~.cards #slide5,
#s4:checked~.cards #slide1,
#s5:checked~.cards #slide2 {
    box-shadow: 0 15px 35px 0 rgba(0, 0, 0, 45%);
    transform: translate3d(70%, 0, -220px);
    --current-color1: #ECEAED;
    --current-color2: #404457;
}

.container .content {
    position: relative;
    text-align: center;
    color: #808000;
    width: max-content;
    padding-bottom: 30px;
    padding-top: -20px;
}

.container .content div:nth-child(2) {
    font-size: 5rem;
    text-transform: uppercase;
    letter-spacing: 10px;
    font-weight: bold;
    position: relative;
}

.container .content div:nth-child(2)::before {
    position: absolute;
    left: 60%;
    bottom: 50%;
    width: 80px;
    height: 80px;
    content: '';
    background-image: url(C:\Users\ayoub\Documents\Github\foodhub\client\public\img\leaves.png);
    background-size: cover;
    background-repeat: no-repeat;
}

.container .content div:nth-child(1) {
    text-align: left;
    text-transform: uppercase;
    transform: translateY(20px);
}

.container .content button {
    border: 1px solid #B5651D;
    background: transparent;
    color: #808000;
    font-family: Poppins;
    letter-spacing: 5px;
    border-radius: 20px;
    padding: 10px 20px;
}



.container .content2 {
    position: absolute;
    text-align: center;
    color: #fff;
}



.container .content2 button {
    border: 1px solid #B5651D;
    background: transparent;
    color: #fff;
    font-family: Poppins;
    letter-spacing: 5px;
    border-radius: 20px;
    padding: 10px 20px;
}
</style>
