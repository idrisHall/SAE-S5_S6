
<template>
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <Navbar_t />
        <div class="container">
            <div v-for="(slide, i) in slides" :key="i" :class="['bg-slide', slideClass(i)]">
                <div class="circle bg">
                    <img :src="slide.imgSrc">
                </div>
                <div class="circle large">
                    <img :src="slide.imgSrc">
                </div>
                <div class="circle small">
                    <img :src="slide.imgSrc">
                </div>
                <div class="content-text">
                    <div class="place">
                        <h1>{{ slide.title }}</h1>
                    </div>
                    <div class="country">
                        <h2>{{ slide.subtitle }}</h2>
                    </div>
                </div>
            </div>
            <div class="circle-darktransp"></div>
            <span class="line"></span>

            <span class="rotate-btn" @click="rotateSlides">
                <i class="fa-solid fa-rotate-right"></i> 
            </span>
        </div>
    </div>
</template>
  
<script>

import Navbar_t from "@/components/navbar_t.vue";

export default {
    data() {
        return {
            currentIndex: 0,
            slides: [
                { imgSrc: 'img1.jpg', title: 'Un Voyage', subtitle: 'Gustatif' },
                { imgSrc: 'img2.jpg', title: 'Partager', subtitle: 'Vos Tradition' },
                { imgSrc: 'img3.jpg', title: 'Découvrez', subtitle: 'Le Monde' },
                { imgSrc: 'img4.jpg', title: 'Une Aventure', subtitle: 'Culinaire' },
                { imgSrc: 'img5.jpg', title: 'Discuter', subtitle: 'Savourer' },
            ]
        };
    },
    methods: {
        rotateSlides() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
        slideClass(index) {
            return {
                'active': index === this.currentIndex,
                'after-active': index === (this.currentIndex - 1 + this.slides.length) % this.slides.length
            };
        }
    },
  components: {Navbar_t},
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 80px;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
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

.container {
    position: relative;
    width: 100%;
    height: 100vh;
}

.bg-slide,
.bg-slide .circle,
.bg-slide .circle img,
.circle-darktransp {
    position: absolute;
    width: 100%;
    height: 100%;
}

.bg-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}

.bg-slide .circle {
    pointer-events: none;
    user-select: none;
    overflow: hidden;
}

.bg-slide.active .circle {
    z-index: 10;

}

.bg-slide .circle.large,
.circle-darktransp {
    clip-path: circle(50% at 50% 50%);
}

.bg-slide .circle.small {
    clip-path: circle(30% at 50% 50%);
    z-index: 12;
}


.bg-slide .circle img {
    object-fit: cover;
    transform: rotate(0deg) scale(4.2);
    opacity: 0;
    transition: transform 1.5s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.bg-slide.active .circle img {
    transform: rotate(360deg) scale(2.2);
    opacity: 1;
}

.bg-slide.after-active .circle img {
    transform: rotate(720deg) scale(4.2);
    opacity: 0;
}

.bg-slide.active .circle.bg img,
.bg-slide.after-active .circle.bg img {
    transition-delay: .9s;
}

.bg-slide.active .circle.large img,
.bg-slide.after-active .circle.large img {
    transition-delay: .6s;
}

.bg-slide.active .circle.samll img,
.bg-slide.after-active .circle.small img {
    transition-delay: .3s;
}


.circle-darktransp {
    background: rgba(0, 0, 0, .1);
    z-index: 11;
}

.bg-slide .content-text {
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bg-slide.active .content-text {
    z-index: 101;
}

.content-text .place,
.content-text .country {
    overflow: hidden;
}

.content-text .country {
    margin-top: 60px;
}

.content-text .place h1,
.content-text .country h2 {
    color: #fff;
    text-transform: uppercase;
    line-height: 1.3;
    opacity: 0;
    transition: transform .5s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 1s;
}

.content-text .place h1 {
    font-size: 60px;
    letter-spacing: 80px;
    margin-right: -80px;
    transform: translateY(100%);
}

.content-text .country h2 {
    font-size: 50px;
    letter-spacing: 30px;
    margin-right: -30px;
    transform: translateY(-100%);
}

.bg-slide.active .content-text .place h1,
.bg-slide.active .content-text .country h2 {
    transform: translateY(0%);
    opacity: 1;

}

.bg-slide.after-active .content-text .place h1 {
    transform: translateY(-100%);
    opacity: 1;
}


.bg-slide.after-active .content-text .country h2 {
    transform: translateY(100%);
    opacity: 1;
}

.line {
    position: absolute;
    left: 50%;
    top: 50.5%;
    transform: translateX(-50%);
    width: 500px;
    height: 2px;
    background: #fff;
    z-index: 100;
}

.rotate-btn {
    position: absolute;
    bottom: 60px;
    right: 60px;
    width: 60px;
    height: 60px;
    background: #aba72c;
    border: 2px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rotate-btn.active {
    transform: rotate(360deg);
    pointer-events: none;
    transition: transform .5s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: .2s;
}

.rotate-btn i {
    font-size: 40px;
    color: #fff;
}
</style>
  