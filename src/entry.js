import * as THREE from 'three';

import { scene, camera, update, raycaster } from './content';

import { Mouse } from './mouse';
var renderer = THREE.WebGLRenderer;

var userMouse = new Mouse();
userMouse.addEventListener(document);

var updateOptions = {
  renderer: renderer,
  scene: scene,
  camera: camera,
  mouse: userMouse,
}

init();
animate();

function init() {
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
}

function animate() {
	requestAnimationFrame(animate);
	update(updateOptions);
	renderer.render(scene, camera);
}