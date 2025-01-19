import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAY2jM4k4iwXDmqZFA6tS1tDx-zVEUO-F4",
  authDomain: "full-stack-react-f7a29.firebaseapp.com",
  projectId: "full-stack-react-f7a29",
  storageBucket: "full-stack-react-f7a29.firebasestorage.app",
  messagingSenderId: "199139569230",
  appId: "1:199139569230:web:a3299612432511bd3e9d1f",
};

const app = initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
