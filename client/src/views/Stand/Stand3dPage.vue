<template>
  <div>
    <div ref="threeJsContainer" style="width: 100%; height: 100vh;"></div>
    <div id="position-display"
      style="position: absolute; top: 10px; right: 10px; background-color: rgba(255, 255, 255, 0.8); padding: 5px;">
      Position (x, y, z): {{ cameraPosition.x.toFixed(2) }}, {{ cameraPosition.y.toFixed(2) }}, {{
        cameraPosition.z.toFixed(2) }}
    </div>
  </div>
</template>
  
<style></style>
  
<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls"

export default {
  name: "ThreeJsScene",
  data() {
    return {
      camera: null,
      cameraPosition: new THREE.Vector3(),
      cameraInitialized: false,
      controls: null,
      isPointerLocked: false,
      tables: [
        { // Stand 1-1
          modelPath: 'stand/scene.glb',
          position: { x: -950, y: 0, z: -485 },
          scale: { x: 5, y: 5, z: 5 }
        },
        { // Stand 1-2
          modelPath: 'stand/scene.glb',
          position: { x: -730, y: 0, z: -485 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 1-3
          modelPath: 'stand/scene.glb',
          position: { x: -510, y: 0, z: -485 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 1-4
          modelPath: 'stand/scene.glb',
          position: { x: -70, y: 0, z: -485 },
          scale: { x: 5, y: 5, z: 5}
        },{ // Stand 1-5
          modelPath: 'stand/scene.glb',
          position: { x: 150, y: 0, z: -485 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 1-6
          modelPath: 'stand/scene.glb',
          position: { x: 590, y: 0, z: -485 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 1-7
          modelPath: 'stand/scene.glb',
          position: { x: 810, y: 0, z: -485 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 1-8
          modelPath: 'stand/scene.glb',
          position: { x: 1030, y: 0, z: -485 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 1-9
          modelPath: 'stand/scene.glb',
          position: { x: 1250, y: 0, z: -485 },
          scale: { x: 5, y: 5, z: 5 }
        },


        { // Stand 2-1
          modelPath: 'stand/scene.glb',
          position: { x: -950, y: 0, z: -235 },
          scale: { x: 5, y: 5, z: 5 }
        },
        { // Stand 2-2
          modelPath: 'stand/scene.glb',
          position: { x: -730, y: 0, z: -235 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 2-3
          modelPath: 'stand/scene.glb',
          position: { x: -510, y: 0, z: -235 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 2-4
          modelPath: 'stand/scene.glb',
            position: { x: -70, y: 0, z: -235 },
          scale: { x: 5, y: 5, z: 5}
        },{ // Stand 2-6
          modelPath: 'stand/scene.glb',
          position: { x: 590, y: 0, z: -235 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 2-7
          modelPath: 'stand/scene.glb',
          position: { x: 810, y: 0, z: -235 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 2-8
          modelPath: 'stand/scene.glb',
          position: { x: 1030, y: 0, z: -235 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 2-9
          modelPath: 'stand/scene.glb',
          position: { x: 1250, y: 0, z: -235 },
          scale: { x: 5, y: 5, z: 5 }
        },




        { // Stand 3-1
          modelPath: 'stand/scene.glb',
          position: { x: -950, y: 0, z: 225 },
          scale: { x: 5, y: 5, z: 5 }
        },
        { // Stand 3-2
          modelPath: 'stand/scene.glb',
          position: { x: -730, y: 0, z: 225 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 3-3
          modelPath: 'stand/scene.glb',
          position: { x: -510, y: 0, z: 225 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 3-4
          modelPath: 'stand/scene.glb',
          position: { x: -70, y: 0, z: 225 },
          scale: { x: 5, y: 5, z: 5}
        },{ // Stand 3-5
          modelPath: 'stand/scene.glb',
          position: { x: 150, y: 0, z: 225 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 3-6
          modelPath: 'stand/scene.glb',
          position: { x: 590, y: 0, z: 225 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 3-7
          modelPath: 'stand/scene.glb',
          position: { x: 810, y: 0, z: 225 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 3-8
          modelPath: 'stand/scene.glb',
          position: { x: 1030, y: 0, z: 225 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 3-9
          modelPath: 'stand/scene.glb',
          position: { x: 1250, y: 0, z: 225 },
          scale: { x: 5, y: 5, z: 5 }
        },




        { // Stand 4-3
          modelPath: 'stand/scene.glb',
          position: { x: -510, y: 0, z: 425 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 4-4
          modelPath: 'stand/scene.glb',
          position: { x: -70, y: 0, z: 425 },
          scale: { x: 5, y: 5, z: 5}
        },{ // Stand 4-5
          modelPath: 'stand/scene.glb',
          position: { x: 150, y: 0, z: 425 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 4-6
          modelPath: 'stand/scene.glb',
          position: { x: 590, y: 0, z: 425 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 4-7
          modelPath: 'stand/scene.glb',
          position: { x: 810, y: 0, z: 425 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 4-8
          modelPath: 'stand/scene.glb',
          position: { x: 1030, y: 0, z: 425 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 4-9
          modelPath: 'stand/scene.glb',
          position: { x: 1250, y: 0, z: 425 },
          scale: { x: 5, y: 5, z: 5 }
        },



        { // Stand 5-3
          modelPath: 'stand/scene.glb',
          position: { x: -510, y: 0, z: 635 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 5-4
          modelPath: 'stand/scene.glb',
          position: { x: -70, y: 0, z: 635 },
          scale: { x: 5, y: 5, z: 5}
        },{ // Stand 5-6
          modelPath: 'stand/scene.glb',
          position: { x: 590, y: 0, z: 635 },
          scale: { x: 5, y: 5, z: 5 }
        },




        { // Stand 6-3
          modelPath: 'stand/scene.glb',
          position: { x: -510, y: 0, z: 845 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 6-4
          modelPath: 'stand/scene.glb',
          position: { x: -70, y: 0, z: 845 },
          scale: { x: 5, y: 5, z: 5}
        },{ // Stand 6-5
          modelPath: 'stand/scene.glb',
          position: { x: 150, y: 0, z: 845 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 6-6
          modelPath: 'stand/scene.glb',
          position: { x: 590, y: 0, z: 845 },
          scale: { x: 5, y: 5, z: 5 }
        },


        { // Stand 7-3
          modelPath: 'stand/scene.glb',
          position: { x: -510, y: 0, z: 1055 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 7-4
          modelPath: 'stand/scene.glb',
          position: { x: -70, y: 0, z: 1055 },
          scale: { x: 5, y: 5, z: 5}
        },{ // Stand 7-5
          modelPath: 'stand/scene.glb',
          position: { x: 150, y: 0, z: 1055 },
          scale: { x: 5, y: 5, z: 5 }
        },{ // Stand 7-6
          modelPath: 'stand/scene.glb',
          position: { x: 590, y: 0, z: 1055 },
          scale: { x: 5, y: 5, z: 5 }
        }
      ],
    };
  },
  mounted() {
    this.initThreeJS();
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('mousemove', this.onMouseMove);
    this.$refs.threeJsContainer.removeEventListener('click', this.onCanvasClick);
  },
  methods: {
    initThreeJS() {
      // Initialisation de la scène, de la caméra et du rendu
      const scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.set(-730, 40, -485); // Réglez la hauteur de la caméra à 1.6 mètres du sol
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.threeJsContainer.appendChild(renderer.domElement);

      // Chargement de l'objet 3D
      const loader = new GLTFLoader();
      loader.load('/stand/metallic_showroom_gallery/scene.gltf', (gltf) => {
        scene.add(gltf.scene);
      }, undefined, function (error) {
        console.error(error);
      });

      this.tables.forEach((tableInfo) => {
        // Chargement des modèles .glb
        loader.load(tableInfo.modelPath, (gltf) => {
          const table = gltf.scene;
          table.position.set(tableInfo.position.x, tableInfo.position.y, tableInfo.position.z);
          table.scale.set(tableInfo.scale.x, tableInfo.scale.y, tableInfo.scale.z);
          scene.add(table);
        }, undefined, function (error) {
          console.error(error);
        });
      });

      // Configuration des PointerLockControls
      this.controls = new PointerLockControls(this.camera, renderer.domElement);
      scene.add(this.controls.getObject());

      // Fonction de rendu
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, this.camera);
        if (this.isPointerLocked) {
          this.onMouseMove();
        }

        this.cameraPosition.copy(this.camera.position);

        // Mettre à jour la vue
        this.updatePositionDisplay(); // Appel de la fonction pour mettre à jour l'affichage de la position
      };

      animate();

      const light = new THREE.AmbientLight(0xffffff, 6); // Lumière douce blanche
      scene.add(light);

      // Marquez la caméra comme initialisée
      this.cameraInitialized = true;

      // Ajoutez l'écouteur d'événement après l'initialisation de la caméra
      window.addEventListener('keydown', this.onKeyDown);

      // Ajoutez un gestionnaire d'événement pour activer PointerLockControls
      this.$refs.threeJsContainer.addEventListener('click', this.onCanvasClick);
    },
    updatePositionDisplay() {
      const positionDisplay = document.getElementById('position-display');
      if (positionDisplay) {
        positionDisplay.textContent = `Position (x, y, z): ${this.cameraPosition.x.toFixed(2)}, ${this.cameraPosition.y.toFixed(2)}, ${this.cameraPosition.z.toFixed(2)}`;
      }
    },
    onKeyDown(event) {
      if (!this.cameraInitialized) {
        return; // Ne rien faire si la caméra n'est pas encore initialisée
      }

      const speed = 4; // Vitesse de déplacement

      switch (event.key) {
        case 'ArrowUp': {
          // Déplacer vers l'avant dans le plan horizontal (x, z)
          const direction = this.controls.getDirection(new THREE.Vector3(0, 0, -1)).clone();
          direction.multiplyScalar(speed);
          direction.y = 0; // Ignorer les modifications en y
          this.camera.position.add(direction);
          break;
        }
        case 'ArrowDown': {
          // Déplacer vers l'arrière dans le plan horizontal (x, z)
          const direction = this.controls.getDirection(new THREE.Vector3(0, 0, 1)).clone();
          direction.multiplyScalar(speed);
          direction.y = 0; // Ignorer les modifications en y
          this.camera.position.add(direction);
          break;
        }
        case 'ArrowLeft': {
          // Déplacer vers la gauche dans le plan horizontal (x, z)
          const left = new THREE.Vector3(-1, 0, 0).clone();
          left.applyQuaternion(this.camera.quaternion);
          left.multiplyScalar(speed);
          left.y = 0; // Ignorer les modifications en y
          this.camera.position.add(left);
          break;
        }
        case 'ArrowRight': {
          // Déplacer vers la droite dans le plan horizontal (x, z)
          const right = new THREE.Vector3(1, 0, 0).clone();
          right.applyQuaternion(this.camera.quaternion);
          right.multiplyScalar(speed);
          right.y = 0; // Ignorer les modifications en y
          this.camera.position.add(right);
          break;
        }
      }
    },
    onCanvasClick() {
      this.controls.lock();
      this.isPointerLocked = true;
      window.addEventListener('mousemove', this.onMouseMove);
    },
    onMouseMove() {
      if (!this.cameraInitialized || !this.isPointerLocked) {
        return;
      }

      // Vous pouvez ajouter ici une logique pour gérer le mouvement de la souris si nécessaire,
      // mais dans cet exemple, nous laissons cette partie vide pour maintenir la vue inchangée.
    },
  }
};
</script>
  