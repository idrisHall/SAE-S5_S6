<template>
  <div id="scene-container">
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default {
  name: 'MonObjet3D',
  mounted() {
    // this.initThree()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize)
    this.stopAnimation()
    this.renderer.dispose()
  },
  methods: {
    initThree() {
      // Taille de la scène
      const width = this.$el.clientWidth
      const height = this.$el.clientHeight

      // Créer la scène
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0xFFF8ED);

      // Créer une caméra
      this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
      this.camera.position.z = 1;
      this.camera.position.y = 1

      

      // Créer un rendu
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(width, height)
      this.$el.appendChild(this.renderer.domElement)
      // Initialiser les OrbitControls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true; // L'amortissement de mouvement donne un effet plus naturel
      this.controls.dampingFactor = 0.05;
      this.controls.screenSpacePanning = false;
      this.controls.maxPolarAngle = Math.PI / 2;


      // Ajouter un éclairage ambiant
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      this.scene.add(ambientLight);

      // Ajouter une lumière directionnelle
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(0, 1, 0); // Vous pouvez ajuster la position selon vos besoins
      this.scene.add(directionalLight);




      // Charger le modèle GLTF
      const loader = new GLTFLoader()
      loader.load('/fast-food/scene.gltf', (gltf) => {
        // Redimensionnement du modèle
        // Repositionnement du modèle
        gltf.scene.position.set(0, 0, 0); // Ajustez ces valeurs pour positionner le modèle

        this.scene.add(gltf.scene);
        this.startAnimation(); // Démarre l'animation après le chargement du modèle
      }, undefined, function (error) {
        console.error("Erreur de chargement du modèle", error);
      });
      // Gérer le redimensionnement de la fenêtre
      window.addEventListener('resize', this.onWindowResize)
    },
    startAnimation() {
      this.animationId = requestAnimationFrame(this.startAnimation)
      // Mettez ici la logique d'animation de votre scène
      this.renderer.render(this.scene, this.camera)
    },
    stopAnimation() {
      cancelAnimationFrame(this.animationId)
    },
    onWindowResize() {
      this.camera.aspect = this.$el.clientWidth / this.$el.clientHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.$el.clientWidth, this.$el.clientHeight)
    }
  }
}
</script>

<style scoped>
html, section{
    margin: 0; /* Supprime les marges par défaut du navigateur */
    padding: 0; /* Supprime le rembourrage par défaut du navigateur */
    height: 100%; /* Assure que le corps occupe toute la hauteur de la fenêtre */
}

#scene-container {
  width: 100vw; /* 100% de la largeur de la fenêtre */
  height: 110vh; /* 100% de la hauteur de la fenêtre */
  margin: 0; /* Supprime les marges pour la section */
  padding: 0; /* Supprime le rembourrage pour la section */
  background-image: url(C:\Users\ayoub\Documents\Github\foodhub\client\public\img\fonddd.jpg);
  background-size: cover; /* Pour ajuster l'image à la taille de la fenêtre du navigateur */
  background-position: center; /* Pour centrer l'image */
  padding-bottom: 300px;

}



#overlay-image {
  position: absolute;
  top: 50%; /* Centrer verticalement */
  left: 50%; /* Centrer horizontalement */
  transform: translate(-50%, -50%);
  pointer-events: none; /* Pour s'assurer que l'image ne bloque pas les événements de la souris pour Three.js */
  max-width: 100%; /* Optionnel : Assurez-vous que l'image ne dépasse pas le conteneur */
  max-height: 100%; /* Optionnel : Assurez-vous que l'image ne dépasse pas le conteneur */
}
</style>
