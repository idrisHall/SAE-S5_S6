
<template>
  <div class="hero">
    <Navbar_t/>
    <div class="form-box">
      <div class="button-box">
        <div :style="{ left: buttonLeft + 'px' }" id="btn"></div>
        <button class="toggle-btn" @click="showLogin">Log In</button>
        <button class="toggle-btn" @click="showRegister">Register</button>
      </div>
      <form id="login" :style="{ left: loginLeft + 'px' }" class="input-group" @submit.prevent="login">
        <input type="text" v-model="email" class="input-field" placeholder="Email" required>
        <input type="password" v-model="password" class="input-field" placeholder="Mot de passe" required>
        <input type="checkbox" class="chech-box"><span>Sauvegarde le Mot De Passe</span>
        <button type="submit" class="submit-btn">Connexion</button>
      </form>
      <form id="register" :style="{ left: registerLeft + 'px' }" class="input-group" @submit.prevent="register">
        <input type="text" v-model="registerNom" class="input-field" placeholder="Nom" required>
        <input type="text" v-model="registerPrenom" class="input-field" placeholder="Prenom" required>
        <input type="email" v-model="registerEmail" class="input-field" placeholder="Email" required>
        <input type="password" v-model="registerPassword" class="input-field" placeholder="Mot de passe" required>
        <input type="checkbox" class="chech-box" required><span>I agree to the terms & conditions</span>
        <button type="submit" class="submit-btn">Inscription</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import cookie from 'cookie';
import Navbar_t from "@/components/navbar_t.vue";
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {Navbar_t},
  data() {
    return {
      isLogin: true,
      loginLeft: 50,
      registerLeft: 450,
      buttonLeft: 0,
      email: '',
      password: '',
      registerNom: '',
      registerPrenom: '',
      registerEmail: '',
      registerPassword: '',
    };
  },
  methods: {
    showLogin() {
      this.isLogin = true;
      this.loginLeft = 50;
      this.registerLeft = 450;
      this.buttonLeft = 0;
    },
    showRegister() {
      this.isLogin = false;
      this.loginLeft = -400;
      this.registerLeft = 50;
      this.buttonLeft = 110;
    },
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/user/login', {
          email: this.email,
          password: this.password
        });

        if (response.data.message === 'Connecté avec succès') {
          // Stockez les données de session dans un cookie côté client
          console.log(response.data.user);
          const sessionCookie = cookie.serialize('connect.sid', JSON.stringify(response.data.user), {
            path: '/', // Le chemin du cookie (ajustez selon vos besoins)
          });

          document.cookie = sessionCookie;

          // Récupérez la valeur du cookie
          const sessionCookieValue = decodeURIComponent(document.cookie);

          // Retirez "connect.sid=" du cookie en utilisant replace
          const sessionDataJSON = sessionCookieValue.replace('connect.sid=', '');

          // Convertissez la valeur du cookie en objet JSON
          const sessionData = JSON.parse(sessionDataJSON);

          // Affichez le contenu du cookie dans la console
          console.log('Contenu du cookie :', sessionData);

          // Accédez aux champs des données de session et affichez-les
          console.log('Nom de l\'utilisateur :', sessionData.Nom);
          console.log('Prénom de l\'utilisateur :', sessionData.Prénom);
          console.log('Email de l\'utilisateur :', sessionData.mail);

          console.log('connecté');
          alert('Connecté avec succès !');
          this.$router.push('/dashboard');
        }
      } catch (error) {
        console.error('Login failed:', error);
        alert('Connection raté !');
      }
    },

    async register() {
      try {
        const response = await axios.post('http://localhost:3000/user/register', {
          Nom: this.registerNom,
          Prénom: this.registerPrenom,
          mail: this.registerEmail,
          password: this.registerPassword
        });

        if (response.data.message === 'Registration successful') {
          alert('Inscription avec succès !');
          this.$router.push('/login');
        }
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Inscription raté !');
      }
    },
  }
};
</script>
  
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.hero {
  height: 100%;
  width: 100%;
  background-color: #000;
  background-position: center;
  background-size: cover;
  position: absolute;
}

.form-box {
  width: 380px;
  height: 480px;
  position: relative;
  margin: 6% auto;
  background: #fff;
  padding: 15px;
  overflow: hidden;
  border-radius: 20px;
}

.button-box {
  width: 220px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 9px #ff61241f;
  border-radius: 30px;
}

.toggle-btn {
  padding: 10px 30px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
}

#btn {
  top: 0;
  left: 0;
  position: absolute;
  width: 110px;
  height: 100%;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border-radius: 30px;
  transition: .5s;
}

.input-group {
  top: 140px;
  position: absolute;
  width: 280px;
  transition: .5s;
}

.input-field {
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #999;
  outline: none;
  background: transparent;
}

.submit-btn {
  width: 85%;
  padding: 10px 30px;
  cursor: pointer;
  display: block;
  margin: auto;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border: 0;
  outline: none;
  border-radius: 30px;
}

.chech-box {
  margin: 30px 10px 30px 0;
}

span {
  color: #777;
  font-size: 12px;
  bottom: 68px;
  position: absolute;

}

#login {
  left: 50px;
}

#register {
  left: 450px;
}
</style>
  