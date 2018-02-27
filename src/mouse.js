import * as THREE from 'three';

class Mouse {
  constructor() {
    this.position = new THREE.Vector2(-1, -1);

    this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
  }

  addEventListener(doc) {
    doc.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
  }

  onDocumentMouseMove(e) {
    e.preventDefault();
    this.position.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    this.position.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
  }
}

export { Mouse }