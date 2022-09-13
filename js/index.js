(async function () {
  const respuesta = await fetch("../productos.json");
  const origenes = await respuesta.json();

  const carrito = [];

  if (localStorage.carrito) {
    const recuperoCarrito = JSON.parse(localStorage.getItem("carrito"));
    recuperoCarrito.forEach((prodCarrito) => {
      carrito.push(prodCarrito);
    });
  }
  const producto = document.getElementById("productos");

  function crearProducto() {
    for (let prod of origenes) {
      let contenedor = document.createElement("div");
      contenedor.className = "cafe";

      const image = document.createElement("img");
      image.className = "imgBolsa";
      image.src = "../img/bolsa cafe.jpg";
      contenedor.appendChild(image);

      let lista = document.createElement("ul");
      lista.id = "txtProd";
      lista.innerHTML = `<li>Origen: ${prod.origen}</li>
    <li>Precio: ${prod.precio}</li>
    <li>Peso: ${prod.peso}</li>`;
      contenedor.appendChild(lista);

      let btn = document.createElement("button");
      btn.innerText = "Agregar al carrito";
      btn.className = "btnAgr";
      btn.id = `prodid${prod.id}`;

      contenedor.appendChild(btn);

      producto.appendChild(contenedor);
    }
    agregarClick();
  }

  crearProducto();

  function agregarClick() {
    origenes.forEach((prods) => {
      document
        .querySelector(`#prodid${prods.id}`)
        .addEventListener("click", () => {
          agregarAlCarrito(prods);
        });
    });
  }

  function agregarAlCarrito(prods) {
    let existe = carrito.some((productoSome) => productoSome.id === prods.id);
    if (existe === false) {
      prods.cantidad = 1;
      carrito.push(prods);
    } else {
      prods.cantidad++;
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
})();
