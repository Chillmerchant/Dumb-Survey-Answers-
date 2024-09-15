particlesJS('particle-background', {
    particles: {
        number: { value: 80 },
        color: { value: '#ffffff' },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 3,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
        },
        modes: {
            grab: { distance: 200, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 },
        },
    },
    retina_detect: true,
});

(function() {
    const container = document.getElementById('cube-container');
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2, 2, 2);

    const materials = [
        new THREE.MeshBasicMaterial({ color: 0xff6b6b }),
        new THREE.MeshBasicMaterial({ color: 0x6bffb4 }),
        new THREE.MeshBasicMaterial({ color: 0x6b9bff }),
        new THREE.MeshBasicMaterial({ color: 0xfff76b }),
        new THREE.MeshBasicMaterial({ color: 0xff6bff }),
        new THREE.MeshBasicMaterial({ color: 0x6bffea }),
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    scene.add(ambientLight);

    function animate() {
        requestAnimationFrame(animate);
        
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        
        renderer.setSize(width, height);
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
})();
