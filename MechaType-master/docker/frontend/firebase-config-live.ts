// Para encontrar tu configuración de Firebase, sigue estos pasos:
// 1. Ve a https://console.firebase.google.com/ y selecciona tu proyecto.
// 2. En la parte superior izquierda, haz clic en "Settings" > "Project Settings" > "General".
// 3. Desplázate hacia abajo hasta "Your apps" > "Web Apps" (si no existe, crea una).
// 4. Selecciona "SDK setup and configuration" > "npm".
// 5. Tu configuración estará visible allí.

export const firebaseConfig = {
  // Clave API de Firebase para autenticar las solicitudes.
  apiKey: "###FIREBASE_APIKEY###",

  // Dominio de autenticación de Firebase.
  authDomain: "###FIREBASE_AUTHDOMAIN###",

  // ID del proyecto en Firebase.
  projectId: "###FIREBASE_PROJECTID###",

  // Bucket de almacenamiento de Firebase para archivos.
  storageBucket: "###FIREBASE_STORAGEBUCKET###",

  // ID del remitente para mensajería (usado en Firebase Cloud Messaging).
  messagingSenderId: "###FIREBASE_MESSAGINGSENDERID###",

  // ID de la aplicación Firebase.
  appId: "###FIREBASE_APPID###",
};