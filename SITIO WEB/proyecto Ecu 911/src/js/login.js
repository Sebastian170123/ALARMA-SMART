// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB1WyqGu7IfiT_BAoXI-9jfUdySqzvx19E",
    authDomain: "emergencybuttonapp-435f8.firebaseapp.com",
    databaseURL: "https://emergencybuttonapp-435f8-default-rtdb.firebaseio.com",
    projectId: "emergencybuttonapp-435f8",
    storageBucket: "emergencybuttonapp-435f8.firebasestorage.app",
    messagingSenderId: "939990289326",
    appId: "1:939990289326:web:18f1b9114f2e20480b963f"
    };

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Proveedor de autenticación de Google
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Login con email y contraseña
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            redirigirDashboard();
        })
        .catch((error) => {
            alert('Error de inicio de sesión: ' + error.message);
        });
});

// Login con Google
document.getElementById('googleLogin').addEventListener('click', function() {
    firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            redirigirDashboard();
        })
        .catch((error) => {
            alert('Error de inicio de sesión con Google: ' + error.message);
        });
});

function redirigirDashboard() {
    window.location.href = 'dashboard.html';
}

// Verificar estado de autenticación
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('Usuario autenticado:', user.email);
    } else {
        console.log('No hay usuario autenticado');
    }
});