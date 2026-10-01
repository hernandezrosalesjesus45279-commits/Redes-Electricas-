/* ======================================================
   CONFIGURA AQUÍ tus enlaces reales y tu correo.
   ====================================================== */
const CONFIG = {
  discord: "https://discord.gg/TjqUFvzw8",
  twitch: "https://www.twitch.tv/nitzel_v",
  instagram: "https://www.instagram.com/nitzelmx?stkn=MTFnczFua24zMjNrZw==",
  x: "https://x.com/nitzelvv",
  email: "contacto@nitzel.com"
};

document.getElementById("link-discord").href = CONFIG.discord;
document.getElementById("link-twitch").href = CONFIG.twitch;
document.getElementById("link-instagram").href = CONFIG.instagram;
document.getElementById("link-x").href = CONFIG.x;
document.getElementById("text-mail").textContent = CONFIG.email;

/* ======================================================
   ESTRELLAS Y ESTRELLAS FUGACES
   ====================================================== */
// Se agregó el parámetro 'starCount' para poder reducirlo en móviles
function buildStars(starCount = 120) {
  const container = document.getElementById("stars");

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = (Math.random() * 100) + "%";
    star.style.top = (Math.random() * 100) + "%";
    const size = Math.random() * 2 + 1; 
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.animationDuration = (Math.random() * 2 + 1.5) + "s";
    star.style.animationDelay = (Math.random() * 2) + "s";
    container.appendChild(star);
  }
}

function spawnShootingStar() {
  const container = document.getElementById("stars");
  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.left = (Math.random() * 80 + 20) + "%"; 
  star.style.top = (Math.random() * 30) + "%"; 
  star.style.animationDuration = (Math.random() * 0.8 + 1) + "s";
  container.appendChild(star);

  setTimeout(() => { star.remove(); }, 2000);
}

setInterval(() => {
  if (Math.random() > 0.3) { spawnShootingStar(); }
}, 800); 

/* ======================================================
   NUBES
   ====================================================== */
function buildClouds(){
  const container = document.getElementById("clouds");
  const count = 4;
  for (let i = 0; i < count; i++){
    const cloud = document.createElement("span");
    const w = 60 + Math.random() * 120;
    const h = w * 0.35;
    cloud.style.width = w + "px";
    cloud.style.height = h + "px";
    cloud.style.left = (Math.random() * 90) + "%";
    cloud.style.top = (8 + Math.random() * 30) + "%";
    cloud.style.opacity = (0.05 + Math.random() * 0.1).toFixed(2);
    container.appendChild(cloud);
  }
}

/* ======================================================
   MECHONES DE PASTO
   ====================================================== */
function plantGrass(containerId, count) {
  const container = document.getElementById(containerId);
  for (let i = 0; i < count; i++) {
    const tuft = document.createElement("div");
    tuft.className = "grass-tuft";
    tuft.style.left = (Math.random() * 100) + "%";
    tuft.style.bottom = (Math.random() * 10) + "px"; 
    
    const scale = 0.8 + Math.random() * 0.7;
    tuft.style.transform = `scale(${scale})`;
    tuft.style.animationDelay = (Math.random() * 2) + "s";
    
    tuft.innerHTML = `
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 24 C10 15 5 10 0 5 C5 10 10 15 12 24 Z" fill="#205c31"/>
        <path d="M12 24 C14 15 19 10 24 5 C19 10 14 15 12 24 Z" fill="#2b7d41"/>
        <path d="M12 24 C12 12 12 5 12 0 C12 5 12 12 12 24 Z" fill="#38a355"/>
      </svg>
    `;
    container.appendChild(tuft);
  }
}

/* ======================================================
   FLORES 
   ====================================================== */
const FLOWER_SVGS = {
  rosa_neon: `
    <svg viewBox="0 0 20 40">
      <line x1="10" y1="16" x2="10" y2="38" stroke="#38a355" stroke-width="2.5"/>
      <path d="M4 14 L8 9 L10 12 L12 9 L16 14 L13 16 L14 20 L10 18 L6 20 L7 16 Z" fill="#ff1493"/>
      <circle cx="10" cy="14" r="2.8" fill="#ffb6c1"/>
    </svg>`,
  girasol_brillante: `
    <svg viewBox="0 0 20 42">
      <line x1="10" y1="16" x2="10" y2="40" stroke="#2b7d41" stroke-width="2.5"/>
      <g fill="#ff69b4">
        <ellipse cx="10" cy="6" rx="3.5" ry="6"/>
        <ellipse cx="10" cy="6" rx="3.5" ry="6" transform="rotate(45 10 6)"/>
        <ellipse cx="10" cy="6" rx="3.5" ry="6" transform="rotate(90 10 6)"/>
        <ellipse cx="10" cy="6" rx="3.5" ry="6" transform="rotate(135 10 6)"/>
      </g>
      <circle cx="10" cy="6" r="4.2" fill="#c71585"/>
    </svg>`,
  flor_cyber: `
    <svg viewBox="0 0 18 34">
      <line x1="9" y1="14" x2="9" y2="32" stroke="#38a355" stroke-width="2.5"/>
      <g fill="#ff99cc">
        <circle cx="9" cy="7" r="4"/>
        <circle cx="4.5" cy="10.5" r="3.5"/>
        <circle cx="13.5" cy="10.5" r="3.5"/>
      </g>
      <circle cx="9" cy="9.5" r="2" fill="#ffffff"/>
    </svg>`
};

function scatterFlowers(containerId, count){
  const container = document.getElementById(containerId);
  const types = Object.keys(FLOWER_SVGS);
  for (let i = 0; i < count; i++){
    const flower = document.createElement("div");
    flower.className = "flower";
    const type = types[Math.floor(Math.random() * types.length)];
    
    const size = 15 + Math.random() * 12; 
    flower.style.width = size + "px";
    flower.style.height = (size * 2.9) + "px";
    
    flower.style.left = (Math.random() * 94) + "%";
    flower.style.bottom = (2 + Math.random() * 6) + "px"; 
    
    flower.style.animationDelay = (Math.random() * 3).toFixed(2) + "s";
    flower.innerHTML = FLOWER_SVGS[type];
    container.appendChild(flower);
  }
}

/* ======================================================
   INICIALIZACIÓN OPTIMIZADA PARA MÓVILES
   ====================================================== */

// Detecta si la pantalla es menor a 768px (teléfonos y tablets pequeñas)
let esMovil = window.innerWidth <= 768;

// Asigna cantidades dependiendo del dispositivo
let cantEstrellas = esMovil ? 40 : 120; // 40 en móvil, 120 en PC
let cantPasto     = esMovil ? 25 : 70;  // 25 en móvil, 70 en PC
let cantFlores    = esMovil ? 20 : 70;  // 20 en móvil, 70 en PC

buildStars(cantEstrellas);
buildClouds();

plantGrass("grassTop", cantPasto);
scatterFlowers("grassTop", cantFlores);

// Si tienes un contenedor "grassBottom" en el HTML, puedes descomentar esto:
// plantGrass("grassBottom", cantPasto);
// scatterFlowers("grassBottom", cantFlores);
