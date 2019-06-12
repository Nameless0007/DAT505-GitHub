var renderer, scene, camera;
var controls;
var material;
var geometry;
var randomRotationX = [];
var randomRotationY = [];
var objects = [];
//Definition global variable

function init() {

  scene = new THREE.Scene();
  // Create scenarios.

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);
  // Create Camera.

  var ambLight = new THREE.AmbientLight(0xFFFFFF);
  ambLight.position.set(0,10000,0);
  ambLight.add(spotLight);
  scene.add(ambLight);
  // Create amblight.

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(1000, 0, 1000);
  scene.add(spotLight);
  // Create spotlight.

  renderer = new THREE.WebGLRenderer({antialias:true});

  renderer.setClearColor(0x000000);
  // Configure the renderer to clear the color.

  renderer.setSize( window.innerWidth, window.innerHeight );
  // setting Rendering Size.

  renderer.setPixelRatio( window.devicePixelRatio );
  // Create a renderer using anti-aliasing.

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableRotate = true;
  // Use the OrbitControls to control the camera by mousemoving.
  var randomSelection = Math.round(Math.random()*6)+1;
  // Setting the range of the randomselection.Take only integers.

  var	texture = new THREE.TextureLoader().load( "textures/texture"+randomSelection+".jpg" );
  // Loading Random Texture by the randomSelection.
  var	texture1 = new THREE.TextureLoader().load( "textures/texture6.jpg" );
  // Load the selected texture.

  for (var x = -10; x <= 5; x += 5) {
  for (var y = -10; y <= 5; y += 5) {
  for (var z = -10; z <= 5; z += 5) {
  // Starting from -10 , add one for every 5 pixels in turn.
      if (x >= 0 && y >=0 && z >=0){
  // Create different geometries in different regionss.
      geometry = new THREE.BoxGeometry(3, 3, 3);
  }
    else if ( x <= 0 && y >= 0 && z >=0){ geometry = new THREE.CylinderGeometry( 2, 2, 3, 32 );}
    else if ( x >= 0 && y <= 0 && z >=0){ geometry = new THREE.ConeGeometry( 2, 3, 32);}
    else if ( x >= 0 && y >= 0 && z <=0){ geometry = new THREE.SphereGeometry( 2, 32, 32 );}
    else if ( x <= 0 && y <= 0 && z >=0){ geometry = new THREE.IcosahedronGeometry(3, 0);}
    else if ( x <= 0 && y >= 0 && z <=0){ geometry = new THREE.TorusGeometry( 2, 1, 8, 6 );}
    else if ( x >= 0 && y <= 0 && z <=0){ geometry = new THREE.TetrahedronGeometry(3, 0);}
    else {geometry = new THREE.OctahedronGeometry(3, 0);}
    //Create three-dimensional grids of objects and locate them accordingly.

  if (x >= 0 && y >=0 && z >=0)//Create different objects in different locations using if/else functions.
      {
      material = new THREE.MeshLambertMaterial( {color: Math.random() * 0xFFFFFF} );
    }

else if ( x <= 0 && y >= 0 && z >=0){ material = new THREE.MeshLambertMaterial( { map: texture1, transparent: true } );}
    else if ( x >= 0 && y <= 0 && z >=0){ material = new THREE.MeshBasicMaterial( { color: 0xffaa00, transparent: true, blending: THREE.AdditiveBlending } );}
    else if ( x >= 0 && y >= 0 && z <=0){ material = new THREE.MeshBasicMaterial( { map: texture} );}
    else if ( x <= 0 && y <= 0 && z >=0){ material = new THREE.MeshLambertMaterial( {color: 0x355C7D} );}
    else if ( x <= 0 && y >= 0 && z <=0){ material = new THREE.MeshNormalMaterial( { flatShading: true } );}
    else if ( x >= 0 && y <= 0 && z <=0){ material = new THREE.MeshBasicMaterial( { color: 0xffaa00, wireframe: true } );}
    else {material = new THREE.MeshPhongMaterial( { color: 0x6C5B7B, specular: 0x666666, emissive: 0xff0000, shininess: 10, opacity: 0.5, transparent: true } );}

    // Create different materials in different fields.

  var mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = x;
      mesh.position.y = y;
      mesh.position.z = z;
  // Create a grid and set the location of the grid.

  var randomValueX = (Math.random() * 0.1)- 0.05;
  var randomValueY = (Math.random() * 0.1)- 0.05;
  // Create Random Rotation Velocity Value.

      randomRotationX.push(randomValueX);
      randomRotationY.push(randomValueY);
  // Push the value Array to rotation speed.

      scene.add(mesh);
  // Adding a grid to a scenario.

      objects.push(mesh);
  // Push grid arrays to objects.
  }
  }
}

  document.body.appendChild(renderer.domElement);
  // Attach the renderer to DOM.

  window.addEventListener( 'resize', onWindowResize, false );
	window.addEventListener( "mousemove", onDocumentMouseMove, false );
}
// Adding listening events.

function drawFrame(){
  requestAnimationFrame(drawFrame);

  objects.forEach(function(o,i){
    o.rotation.x += randomRotationX[i];
    o.rotation.y += randomRotationY[i];
  });

  renderer.render(scene, camera);
// Render Scene.
}

function onWindowResize() {
  // Events that occur when the mouse moves.

	camera.aspect = window.innerWidth / window.innerHeight;
  // Change the aspect ratio property of the camera to the width and height of the window.

	camera.updateProjectionMatrix();
  // Scene Perspective of Updating Camera.

	renderer.setSize( window.innerWidth, window.innerHeight );
  // Reconfigure Scene Width and Height.
}
	  var selectedObject = null;
function onDocumentMouseMove( event ) {
			event.preventDefault();

    var textfiled = document.getElementById("objectinfo");
    // link the. CSS  to the. HTML.
    // HTML to display the object number.

			if ( selectedObject ) {
				selectedObject = null;
        textfiled.style.display="none";
			}
    // Hidden Object Number When Selecting Object.

		var intersects = getIntersects( event.layerX, event.layerY );
			if ( intersects.length > 0 ) {// The position of the point in the mouse point is subtracted from the offset vector, and the new position is assigned to the selected object..
				var res = intersects[ 0 ];
				if ( res && res.object ) {
					selectedObject = res.object;
    // Judging whether objects intersect.

    var num =(selectedObject.getWorldPosition().x/5+3)+(selectedObject.getWorldPosition().y/5+3-1)*4+(selectedObject.getWorldPosition().z/5+3-1)*16;
   // Calculate the number of objects with the location of the selected object.

    textfiled.style.display="block";
   //Display object number.

    textfiled.style.top =  event.clientY+10+"px";
    textfiled.style.left = event.clientX+10+"px";
    //Setting the Position.

    textfiled.textContent = num.toString();
    //Set the object number which be calculated earlier.

				}
			}
		}

    var mouseVector = new THREE.Vector2();
    //Creating a New Two-Dimensional Transform Semi-Unit Vector.

		var raycaster = new THREE.Raycaster();
    //Create Raycaster.

		function getIntersects( x, y ) {
			x = ( x / window.innerWidth ) * 2 - 1;
			y = - ( y / window.innerHeight ) * 2 + 1;

			mouseVector.set( x, y );
      //Raycaster and Screen convert this vector from screen to scene on camera.
			raycaster.setFromCamera( mouseVector, camera );

			return raycaster.intersectObjects( scene.children, true );
     // Set the recursion of each sublevel to true and for intersectobject.
		}
init();
drawFrame();
