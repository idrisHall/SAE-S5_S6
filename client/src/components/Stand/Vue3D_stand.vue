<template>
<div ref="threeJsContainer" style="width: 100%; height: 100vh;"></div>
</template>

<style>

</style>

<script>
import * as THREE from 'three';
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';
import {
    OrbitControls
} from "three/examples/jsm/controls/OrbitControls"

export default {
    name: "ThreeJsScene",
    data() {
        return {
            camera: null,
        };
    },
    mounted() {
        this.initThreeJS();
        window.addEventListener('keydown', this.onKeyDown);

    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.onKeyDown);
    },
    methods: {
        initThreeJS() {
            // Initialisation de la scène, de la caméra et du rendu
            const scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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

            // Configuration des OrbitControls
            const controls = new OrbitControls(this.camera, renderer.domElement);

            // Paramètres optionnels
            controls.minDistance = 1;
            controls.maxDistance = 100;
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;

            // Fonction de rendu
            const animate = () => {
                requestAnimationFrame(animate);
                renderer.render(scene, this.camera);
            };

            animate();

            const light = new THREE.AmbientLight(0xffffff, 6); // Lumière douce blanche
            scene.add(light);

        },
        onKeyDown(event) {
            const speed = 2; // Vitesse de déplacement
            const direction = new THREE.Vector3();
            this.camera.getWorldDirection(direction);

            switch (event.key) {
                case 'ArrowUp': {
                    // Déplacer vers l'avant
                    this.camera.position.addScaledVector(direction, speed);
                    break;
                }
                case 'ArrowDown': {
                    // Déplacer vers l'arrière
                    this.camera.position.addScaledVector(direction, -speed);
                    break;
                }
                case 'ArrowLeft': {
                    // Calculer le vecteur vers la gauche
                    const left = new THREE.Vector3().crossVectors(this.camera.up, direction).normalize();
                    this.camera.position.addScaledVector(left, speed);
                    break;
                }
                case 'ArrowRight': {
                    // Calculer le vecteur vers la droite
                    const right = new THREE.Vector3().crossVectors(direction, this.camera.up).normalize();
                    this.camera.position.addScaledVector(right, speed);
                    break;
                }
            }
        }
    }};
</script>
