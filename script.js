// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a blue material
const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });

// Create a 3D box
const boxGeometry = new THREE.BoxGeometry();
const box = new THREE.Mesh(boxGeometry, blueMaterial);
scene.add(box);

// Set initial camera position
camera.position.z = 5;

// Add event listener for arrow key input
const arrowKeyControls = new THREEx.KeyboardState();
const moveSpeed = 0.1;

// Render loop
const animate = () => {
    requestAnimationFrame(animate);

    // Handle arrow key input
    if (arrowKeyControls.pressed('left')) {
        box.rotation.y += 0.02;
    }
    if (arrowKeyControls.pressed('right')) {
        box.rotation.y -= 0.02;
    }

    renderer.render(scene, camera);
};

// Start the animation loop
animate();
