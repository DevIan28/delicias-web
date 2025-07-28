const panes = {
  pan1: {
    nombre: "Pan de queso",
    descripcion: "Suave, calientico y lleno de sabor.",
    precio: "$2.500 COP",
    imagen: "assets/productos/pan1.jpg"
  },
  pan2: {
    nombre: "Pandebono",
    descripcion: "Receta tradicional que enamora.",
    precio: "$2.000 COP",
    imagen: "assets/productos/pan2.jpg"
  },
  pan3: {
    nombre: "Pan integral",
    descripcion: "Saludable y delicioso.",
    precio: "$2.800 COP",
    imagen: "assets/productos/pan3.jpg"
  },
  pan4: {
    nombre: "Pan Hawaiano",
    descripcion: "Dulce con trozos de piña. Ideal para acompañar el café.",
    precio: "$3.000 COP",
    imagen: "assets/productos/pan4.jpg"
  },
  pan5: {
    nombre: "Pan de ajo",
    descripcion: "Perfecto para acompañar tus comidas favoritas.",
    precio: "$2.200 COP",
    imagen: "assets/productos/pan5.jpg"
  },
  pan6: {
    nombre: "Croissant",
    descripcion: "Crujiente por fuera, suave por dentro. Un clásico francés.",
    precio: "$3.500 COP",
    imagen: "assets/productos/pan6.jpg"
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (panes[id]) {
  const pan = panes[id];
  document.getElementById("detalle-pan").innerHTML = `
    <h2>${pan.nombre}</h2>
    <img src="${pan.imagen}" class="img-fluid rounded my-3" alt="${pan.nombre}" />
    <p class="lead">${pan.descripcion}</p>
    <p class="fw-bold fs-5">Precio: ${pan.precio}</p>
  `;
} else {
  document.getElementById("detalle-pan").innerHTML = `<p>Pan no encontrado.</p>`;
}
