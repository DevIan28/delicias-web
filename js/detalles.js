const panes = {
  pan1: {
    nombre: "Pan de queso",
    descripcion: "Suave, calientico y lleno de sabor. Ideal para cualquier hora del día.",
    precio: "$2.500 COP",
    imagen: "assets/productos/pan1.jpg",
    ingredientes: "Queso fresco, harina, huevo",
    tipo: "Salado",
    tamaño: "Mediano"
  },
  pan2: {
    nombre: "Pandebono",
    descripcion: "Receta tradicional del Valle que nunca falla.",
    precio: "$2.000 COP",
    imagen: "assets/productos/pan2.jpg",
    ingredientes: "Almidón, queso, huevo",
    tipo: "Salado",
    tamaño: "Pequeño"
  },
  pan3: {
    nombre: "Pan integral",
    descripcion: "Una opción saludable y deliciosa para el desayuno.",
    precio: "$2.800 COP",
    imagen: "assets/productos/pan3.jpg",
    ingredientes: "Harina integral, avena, linaza",
    tipo: "Saludable",
    tamaño: "Grande"
  },
  pan4: {
    nombre: "Pan Hawaiano",
    descripcion: "Dulce con trozos de piña y un toque de coco. Perfecto con café.",
    precio: "$3.000 COP",
    imagen: "assets/productos/pan4.jpg",
    ingredientes: "Harina, piña, coco",
    tipo: "Dulce",
    tamaño: "Mediano"
  },
  pan5: {
    nombre: "Pan de ajo",
    descripcion: "Pan suave con mantequilla y ajo. Ideal para acompañar comidas.",
    precio: "$2.200 COP",
    imagen: "assets/productos/pan5.jpg",
    ingredientes: "Ajo, mantequilla, harina",
    tipo: "Salado",
    tamaño: "Mediano"
  },
  pan6: {
    nombre: "Croissant",
    descripcion: "Crujiente por fuera, suave por dentro. Un clásico francés.",
    precio: "$3.500 COP",
    imagen: "assets/productos/pan6.jpg",
    ingredientes: "Mantequilla, harina, azúcar",
    tipo: "Dulce",
    tamaño: "Mediano"
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (panes[id]) {
  const pan = panes[id];

  // Detalle principal
  document.getElementById("detalle-pan").innerHTML = `
    <div class="col-md-6 text-center">
      <img src="${pan.imagen}" alt="${pan.nombre}" class="img-fluid rounded shadow-sm"/>
    </div>
    <div class="col-md-6">
      <h2 class="mb-3">${pan.nombre}</h2>
      <p class="lead">${pan.descripcion}</p>
      <h4 class="text-success fw-bold">${pan.precio}</h4>

      <table class="table table-bordered mt-4">
        <tbody>
          <tr><th>Ingredientes</th><td>${pan.ingredientes}</td></tr>
          <tr><th>Tipo</th><td>${pan.tipo}</td></tr>
          <tr><th>Tamaño</th><td>${pan.tamaño}</td></tr>
        </tbody>
      </table>

      <a href="https://wa.me/573001112222?text=Hola%20quiero%20comprar%20el%20${encodeURIComponent(pan.nombre)}" class="btn btn-success mt-3" target="_blank">
        Comprar por WhatsApp
      </a>
    </div>
  `;

  // Sugerencias aleatorias (2 productos distintos al actual)
  const sugerencias = Object.entries(panes)
    .filter(([key]) => key !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  document.getElementById("sugerencias").innerHTML = sugerencias.map(([key, p]) => `
    <div class="col-md-3 col-6">
      <div class="card shadow-sm">
        <a href="detalle.html?id=${key}" class="text-decoration-none text-dark">
          <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
          <div class="card-body p-2">
            <h6 class="card-title">${p.nombre}</h6>
            <span class="badge bg-success">${p.precio}</span>
          </div>
        </a>
      </div>
    </div>
  `).join('');
} else {
  document.getElementById("detalle-pan").innerHTML = `<p>Pan no encontrado.</p>`;
}
