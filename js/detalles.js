const panes = {
  pan1: {
    nombre: "Pan de queso",
    descripcion: "Suave, calientico y lleno de sabor.",
    precio: "$2.500 COP",
    imagen: "assets/productos/pan1.jpg",
    ingredientes: ["Queso costeño", "Almidón de yuca", "Huevos", "Mantequilla"]
  },
  pan2: {
    nombre: "Pandebono",
    descripcion: "Receta tradicional que enamora.",
    precio: "$2.000 COP",
    imagen: "assets/productos/pan2.jpg",
    ingredientes: ["Queso", "Almidón agrio", "Huevo", "Harina de maíz"]
  },
  pan3: {
    nombre: "Pan integral",
    descripcion: "Saludable y delicioso.",
    precio: "$2.800 COP",
    imagen: "assets/productos/pan3.jpg",
    ingredientes: ["Harina integral", "Levadura", "Sal", "Azúcar morena"]
  },
  pan4: {
    nombre: "Pan Hawaiano",
    descripcion: "Dulce con trozos de piña. Ideal para el café.",
    precio: "$3.000 COP",
    imagen: "assets/productos/pan4.jpg",
    ingredientes: ["Harina de trigo", "Piña caramelizada", "Azúcar", "Mantequilla"]
  },
  pan5: {
    nombre: "Pan de ajo",
    descripcion: "Perfecto para acompañar tus comidas favoritas.",
    precio: "$2.200 COP",
    imagen: "assets/productos/pan5.jpg",
    ingredientes: ["Harina de trigo", "Ajo fresco", "Aceite de oliva", "Sal marina"]
  },
  pan6: {
    nombre: "Croissant",
    descripcion: "Crujiente por fuera, suave por dentro. Un clásico francés.",
    precio: "$3.500 COP",
    imagen: "assets/productos/pan6.jpg",
    ingredientes: ["Harina", "Mantequilla", "Levadura", "Azúcar", "Sal"]
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (panes[id]) {
  const pan = panes[id];
  document.getElementById("detalle-pan").innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 align-items-center">
      <div class="col mb-3 mb-md-0">
        <img src="${pan.imagen}" alt="${pan.nombre}" class="img-fluid rounded shadow-sm w-100"/>
      </div>
      <div class="col">
        <h2 class="fw-bold">${pan.nombre}</h2>
        <p class="lead">${pan.descripcion}</p>
        <h5 class="text-success mb-3">${pan.precio}</h5>
        <h6>Ingredientes:</h6>
        <ul class="list-group list-group-flush mb-3">
          ${pan.ingredientes.map(ing => `<li class="list-group-item">${ing}</li>`).join("")}
        </ul>
        <a href="index.html" class="btn btn-primary mt-2">Volver al catálogo</a>
      </div>
    </div>
  `;
} else {
  document.getElementById("detalle-pan").innerHTML = `<p>Pan no encontrado.</p>`;
}
