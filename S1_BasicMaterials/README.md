three.js
========

#### BasicMaterials ####

The goal of this project is to demonstrate the most basic materials.

### Usage ###

This code creates a scene, a camera, and a geometric cube, and it adds the cube to the scene.

```javascript
var scene, camera, renderer;
var geometry, material, mesh;

function init(){
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  renderer = new THREE.WebGLRenderer({antialias:true});

  renderer.setClearColor("#000000");

  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );
}

function geometry(){
  geometry = new THREE.BoxGeometry(100, 100, 100);
  material = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );
  mesh = new THREE.Mesh( geometry, material );
  mesh.position.z = -1000;

  scene.add( mesh );
}

var render = function () {
  requestAnimationFrame( render );

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.setClearColor("#000000");

  renderer.render(scene, camera);
};

init();
geometry();
render();

```
