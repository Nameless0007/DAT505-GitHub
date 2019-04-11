three.js
========

#### GeometriesAndMaterials ####

The goal of this project is to achieve different rotation directions of multiple objects and different materials of objects.

### Usage ###

This code creates a scene, a camera, and a light cube, and it adds the cube to the scene.

```javascript
var scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

var renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setClearColor("#5A8296");

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

var geometry = new THREE.BoxGeometry(100, 100, 100);

var material = new THREE.MeshNormalMaterial( { color: "#433F81" } );


var material2 = new THREE.MeshLambertMaterial({
  color: "#433F81",
  transparent: true,
  opacity: 1
});


var material3 = new THREE.MeshPhongMaterial({shininess: 1});


var material1 = new THREE.MeshLambertMaterial({
  color: '#D2BE82',
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});

var material4 = new THREE.MeshPhongMaterial({
  color: 0xF3FFE2,
  specular: 0xffffff,
  shininess: 1000,
  lightMap: null,
  lightMapIntensity: 1,
  bumpMap: null,
  bumpScale: 1,
  normalMap: null,
  normalScale: 1,
  displacementMap: null,
  displacementScale: 1,
  displacementBias: 0,
  specularMap: null
});


var material5 = new THREE.MeshStandardMaterial({
  color: 0xF3FFE2,
  roughness: 0.5,
  metalness: 0.5
});


var material6 = new THREE.MeshPhysicalMaterial({
  color: 0xF3FFE2,
  roughness: 0,
  metalness: 0.5,
  reflectivity: 0.5,
  clearCoat: 0,
  claerCoatRoughness: 0
});

var texture = new THREE.TextureLoader().load( 'textures/crate.gif')
var material7 = new THREE.MeshBasicMaterial( { map: texture} );

var mesh1 = new THREE.Mesh( geometry, material1 );
mesh1.position.z = -1000;
mesh1.position.y = 100;

var mesh2 = new THREE.Mesh( geometry, material2 );
mesh2.position.z = -1000;
mesh2.position.x = -100;
mesh2.position.y = 200;

var mesh3 = new THREE.Mesh( geometry, material3 );
mesh3.position.z = -1000;
mesh3.position.x = -200;
mesh3.position.y = 100;

var mesh4 = new THREE.Mesh( geometry, material4 );
mesh4.position.z = -1000;
mesh4.position.x = 100;
mesh4.position.y = 200;

var mesh5 = new THREE.Mesh( geometry, material5 );
mesh5.position.z = -1000;
mesh5.position.x = 200;
mesh5.position.y = 100;

var mesh6 = new THREE.Mesh( geometry, material6 );
mesh6.position.z = -1000;
mesh6.position.x = 0;
mesh6.position.y = -100;

var mesh7 = new THREE.Mesh( geometry, material7 );
mesh7.position.z = -1000;
mesh7.position.x = -100;
mesh7.position.y = 0;

var mesh8 = new THREE.Mesh( geometry, material );
mesh8.position.z = -1000;
mesh8.position.x = -200;
mesh8.position.y = -100;

var mesh9 = new THREE.Mesh( geometry, material );
mesh9.position.z = -1000;
mesh9.position.x = 100;
mesh9.position.y = 0;

var mesh10 = new THREE.Mesh( geometry, material );
mesh10.position.z = -1000;
mesh10.position.x = 200;
mesh10.position.y = -100;

var mesh11 = new THREE.Mesh( geometry, material );
mesh11.position.z = -1000;
mesh11.position.x = -100;
mesh11.position.y = -200;

var mesh12 = new THREE.Mesh( geometry, material );
mesh12.position.z = -1000;
mesh12.position.x = 100;
mesh12.position.y = -200;


scene.add( mesh1 );
scene.add( mesh2 );
scene.add( mesh3 );
scene.add( mesh4 );
scene.add( mesh5 );
scene.add( mesh6 );
scene.add( mesh7 );
scene.add( mesh8 );
scene.add( mesh9 );
scene.add( mesh10 );
scene.add( mesh11 );
scene.add( mesh12 );

var rot = 0;

var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+1;
  mesh1.rotation.y = rot+1;

  mesh2.rotation.x = rot;
  mesh2.rotation.y = rot;

  mesh3.rotation.x = rot+2;
  mesh3.rotation.y = rot+2;

  mesh4.rotation.x = rot;
  mesh4.rotation.y = rot;

  mesh5.rotation.x = rot+2;
  mesh5.rotation.y = rot+2;

  mesh6.rotation.x = rot+1;
  mesh6.rotation.y = rot+1;

  mesh7.rotation.x = rot;
  mesh7.rotation.y = rot;

  mesh8.rotation.x = rot+2;
  mesh8.rotation.y = rot+2;

  mesh9.rotation.x = rot;
  mesh9.rotation.y = rot;

  mesh10.rotation.x = rot+2;
  mesh10.rotation.y = rot+2;

  mesh11.rotation.x = rot;
  mesh11.rotation.y = rot;

  mesh12.rotation.x = rot;
  mesh12.rotation.y = rot;

  renderer.render(scene, camera);
};

render();

```
