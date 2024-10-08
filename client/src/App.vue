<template>
	<div id="app">
		<RouterView :UserInfo="UserInfo" />
	</div>
</template>
  
<script>
import { RouterView } from 'vue-router';
import cookie from 'cookie';

export default {
	data() {
		return {
			UserInfo: []
		};
	},
	components: {
		RouterView
	},
	created() {
		const cookies = cookie.parse(document.cookie);
		if (cookies['connect.sid']) {
			// "connect.sid" est le nom par défaut du cookie de session Express
			// Vous pouvez changer ce nom en fonction de votre configuration.
			const sessionData = JSON.parse(decodeURIComponent(cookies['connect.sid']));

			this.UserInfo = sessionData
			console.log('Recup des données')

		}
		else{
			console.log('Recup des données pas faite')
		}
	},
}
</script>
  
<style></style>