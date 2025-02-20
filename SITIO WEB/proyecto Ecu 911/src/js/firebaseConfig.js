// firebaseConfig.js

// Importar Firebase desde la CDN (para usar en scripts no-modulares)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Exportar Firebase para usarlo en otros archivos
export { app, auth, db };
