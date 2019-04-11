var renderer, scene, camera;
var cubes = [];
var rotX = [];
var rotY = [];
var scaleX = [];
var scaleY = [];
var scaleZ = [];
var scaleCube = [];

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
    for (var x = -10; x <= 10; x += 5) { // Start from -35 and sequentially add one every 5 pixels
    for (var y = -10; y <= 10; y += 5) {

      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
    //  if (x==-5 && y==-5){
    //    boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
    //  } else if (x==5 && y ==5){
    //    boxMaterial = new THREE.MeshLambertMaterial({color: 0xF8B195});
    //  } else {
    //    boxMaterial = new THREE.MeshLambertMaterial({color: 0x355C7D});
      //}


      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.z = y;
      mesh.rotation.x = Math.random() * 2 * Math.PI;;
      mesh.rotation.y = Math.random() * 2 * Math.PI;;
      mesh.rotation.z = Math.random() * 2 * Math.PI;;
      //console.log( "Rotation1:" + rotValue);
      //console.log( "Rotation2:" + rotValue);
      //Create random values for x and y, and store them
  //var randomValueX = (Math.random() * 0.1)- 0.05;
      //randomSpeedX.push(randomValueX);
     var rotValX = (Math.random() * 0.05) - 0.025;
     var rotValY = (Math.random() * 0.05) - 0.025;
     var scValX = Math.random() - 0.5;
     var scValY = Math.random() - 0.5;
     var scValZ = Math.random() - 0.5;
     rotX.push(rotValX);
     rotY.push(rotValY);
     scaleX.push(scValX);
     scaleY.push(scValY);
     scaleZ.push(scValZ);
     scaleCube.push(scValX);
      scene.add(mesh);
      cubes.push(mesh);
    }
}
  console.log(cubes);
  //console.log("Init end");
  //console.log("DrawFrame Starts ******");
  document.body.appendChild(renderer.domElement);
}

function drawFrame(){
  requestAnimationFrame(drawFrame);
 scaleCube += 0.02;

 cubes.forEach(function(c, i) {
   c.rotation.x += rotX[i];
   c.rotation.y += rotY[i];
   c.scale.x += rotY[i];
   scaleCube[i] += scaleX[i];
   if ( scaleCube[i] > scaleX[i] ) scaleCube[i] = -scaleX[i];
 });
//console.log(randomRotationX);
//for (var i = 0; i < 5; i ++){
  //cubes[6].rotation.x += randomSpeedX[6];
  //cubes[18].rotation.x += randomSpeedX[18];
  renderer.render(scene, camera);
}

init();
drawFrame();
