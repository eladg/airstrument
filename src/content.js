import * as THREE from 'three';
import 'three/OrbitControls';
import Sound from './sound';

var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.z = 1;

var controls = new THREE.OrbitControls(camera);

var scene = new THREE.Scene();

var raycaster = new THREE.Raycaster();
var INTERSECTED;

var geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
var material, mesh;

// middle
material = new THREE.MeshLambertMaterial( { color: 0x6821ce, emissive: 0x6821ce } )
mesh = new THREE.Mesh(geometry, material);
mesh.name = "C4";
scene.add(mesh);

// left
material = new THREE.MeshLambertMaterial( { color: 0x6821ce, emissive: 0x6821ce } )
mesh = new THREE.Mesh(geometry, material);
mesh.position.set(-0.5, 0, 0);
mesh.name = "E4";
scene.add(mesh);

// // right
material = new THREE.MeshLambertMaterial( { color: 0x6821ce, emissive: 0x6821ce } )
mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0.5, 0, 0);
mesh.name = "G4";
scene.add(mesh);

var soundEngine = new Sound();

function update(options) {
	controls.update();

  // raycaster
  raycaster.setFromCamera( options.mouse.position, camera );

  var intersects = raycaster.intersectObjects( scene.children );

  if ( intersects.length > 0 ) {
    if ( INTERSECTED != intersects[ 0 ].object ) {
  
      console.log("note on! (" + intersects[0].object.name + ")");
      soundEngine.noteOn(intersects[0].object.name);

      if ( INTERSECTED ) {
        INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
      }
      INTERSECTED = intersects[ 0 ].object;
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      INTERSECTED.material.emissive.setHex( 0xce21a5 );
    }
  } else {
    if ( INTERSECTED ) {
      
      console.log("note off!");
      soundEngine.noteOff("C3");

      INTERSECTED.material.emissive.setHex( 0x6821ce );
    }
    INTERSECTED = null;
  }
}

export {scene, camera, update, raycaster};