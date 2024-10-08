<template>
    <div ref="threeJsContainer" style="width: 100%; height: 100vh;"></div>
  </template>
  
  <style></style>
  
  <script>
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
  
  export default {
    name: "TopDownView",
    data() {
      return {
        camera: null,
        cameraInitialized: false,
      };
    },
    mounted() {
      this.initTopDownView();
    },
    beforeDestroy() {
      window.removeEventListener('keydown', this.onKeyDown);
    },
    methods: {
      initTopDownView() {
        // Initialisation de la scène, de la caméra et du rendu
        const scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(
          window.innerWidth / -2, // gauche
          window.innerWidth / 2,  // droite
          window.innerHeight / 2, // haut
          window.innerHeight / -2, // bas
          0.1, // près
          10000 // loin
        );
        this.camera.position.set(0, 200, -200); // Réglez la position de la caméra en vue de dessus
        this.camera.lookAt(0, 0, 0); // Regardez le centre de la scène (0, 0, 0)
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.threeJsContainer.appendChild(renderer.domElement);
  
        // Chargement de l'objet 3D (le même modèle que la vue 3D)
        const loader = new GLTFLoader();
        loader.load('/stand/metallic_showroom_gallery/scene.gltf', (gltf) => {
          scene.add(gltf.scene);
        }, undefined, function (error) {
          console.error(error);
        });
  
        // Ajout de la lumière ambiante
        const light = new THREE.AmbientLight(0xffffff, 1); // Lumière douce blanche (intensité de 0.6)
        scene.add(light);
  
        // Fonction de rendu
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, this.camera);
        };
  
        animate();
  
        // Marquez la caméra comme initialisée
        this.cameraInitialized = true;
  
        // Ajoutez l'écouteur d'événement après l'initialisation de la caméra
        window.addEventListener('keydown', this.onKeyDown);
      },
      onKeyDown(event) {
        if (!this.cameraInitialized) {
          return; // Ne rien faire si la caméra n'est pas encore initialisée
        }
  
        const speed = 2; // Vitesse de déplacement
  
        switch (event.key) {
          case 'ArrowUp':
            this.camera.position.z += speed;
            break;
          case 'ArrowDown':
            this.camera.position.z -= speed;
            break;
          case 'ArrowLeft':
            this.camera.position.x -= speed;
            break;
          case 'ArrowRight':
            this.camera.position.x += speed;
            break;
        }
      },
    }
  };
  </script>
  