var camera, scene, renderer;
var mesh;
var dot, dot2, dot3;
var previous_dot_x, previous_dot_y;
var previous_dot2_x, previous_dot2_y;

var load_dot = function(){
	init();
	animate();

	function init(){

		camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.z = 400;

		scene = new THREE.Scene();

		var dotGeometry = new THREE.Geometry();
		dotGeometry.vertices.push(new THREE.Vector3(0,0,0));
		var dotMaterial = new THREE.PointsMaterial({color: 0x009933, size: 50, sizeAttenuation: false });
		dot = new THREE.Points( dotGeometry, dotMaterial );
		scene.add( dot );

		var dotGeometry2 = new THREE.Geometry();
		dotGeometry2.vertices.push(new THREE.Vector3(0,0,0));
		var dotMaterial2 = new THREE.PointsMaterial({color: 0x00cc44, size: 40, sizeAttenuation: false});
		dot2 = new THREE.Points(dotGeometry2, dotMaterial2);
		scene.add(dot2)

		var dotGeometry3 = new THREE.Geometry();
		dotGeometry3.vertices.push(new THREE.Vector3(0,0,0));
		var dotMaterial3 = new THREE.PointsMaterial({color: 0x00ff55, size: 30, sizeAttenuation: false});
		dot3 = new THREE.Points(dotGeometry3, dotMaterial3);
		scene.add(dot3)
		
		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

		window.addEventListener( 'resize', onWindowResize, false );
	}

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

	}

	function animate() {

		setTimeout(function(){
			requestAnimationFrame( animate );
		}, 100);

		previous_dot_x = dot.position.x;
		previous_dot_y = dot.position.y;
		previous_dot2_x = dot2.position.x;
		previous_dot2_y = dot2.position.y;

		var random = Math.floor(Math.random() * 4) + 1  

		if(random == 1 && dot.position.x < 150){
			dot.position.x += 10;
		} else if(random == 2 && dot.position.y < 150){
			dot.position.y += 10;
		} else if(random == 3 && dot.position.x > -150){
			dot.position.x -= 10;
		} else if(random == 4 && dot.position.y > -150){
			dot.position.y -= 10;
		}

		if(dot2.position.x != dot.position.x){
			dot2.position.x = previous_dot_x;
		}
		if(dot2.position.y != dot.position.y){
			dot2.position.y = previous_dot_y;
		}
		if(dot3.position.x != dot2.position.x){
			dot3.position.x = previous_dot2_x;
		}
		if(dot3.position.y != dot2.position.y){
			dot3.position.y = previous_dot2_y;
		}

		renderer.render( scene, camera );

	}
}