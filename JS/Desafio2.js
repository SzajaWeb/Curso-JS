class Cafe {
  constructor(id, origen, precio, peso) {
    this.id = id;
    this.origen = origen;
    this.precio = precio;
    this.peso = peso;
  }
}
const carrito = [];

const origenes = [];
function creoid() {
  return parseInt(Math.random() * 100000);
}
function generadorauto() {
  origenes.push(new Cafe(creoid(), "BRASIL", 900, "500 grs"));
  origenes.push(new Cafe(creoid(), "HONDURAS", 850, "500 grs"));
  origenes.push(new Cafe(creoid(), "INDIA", 1600, "500 grs"));
  origenes.push(new Cafe(creoid(), "PERU", 550, "250 grs"));
  origenes.push(new Cafe(creoid(), "COLOMBIA", 650, "250 grs"));
  origenes.push(new Cafe(creoid(), "MEXICO", 1200, "500 grs"));
  origenes.push(new Cafe(creoid(), "GUATEMALA", 1800, "1000 grs"));
  origenes.push(new Cafe(creoid(), "ETIOPIA", 1500, "500 grs"));
}
generadorauto();

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
  console.log(carrito);
  cargarProds();
}

function recuperoProdsLS() {
  if (localStorage.carrito) {
    const prodsGuardados = JSON.parse(localStorage.getItem("carrito"));

    prodsGuardados.forEach((prod) => {
      carrito.push(prod);
    });
  }
}

function cargarProds() {
  const cuerpo = document.getElementById("carritoProds");
  cuerpo.innerHTML = "";
  carrito.forEach((prodAgr) => {
    cuerpo.innerHTML += `
    <ul class = "listaProdsCarro">
    <li>ID: ${prodAgr.id}</li>
    <li>Origen: ${prodAgr.origen}</li>
    <li>Precio: ${prodAgr.precio}</li>
    <li>Peso: ${prodAgr.peso}</li>
    </ul>`;
  });
}

// function renderizarCarrito() {
//   const carritoprods = document.querySelector("#carritoprods");
//   const prodsCarro = recuperoProdsLS();

//   let listaCarro = document.createElement("ul");
//     listaCarro.id = "txtProd";
//     listaCarro.innerHTML = `<li>Origen: ${prodsCarro.origen}</li>
//     <li>Precio: ${prodsCarro.precio}</li>
//     <li>Peso: ${prodsCarro.peso}</li>`;
//     carritoprods.appendChild(listaCarro);
//     console.log(prodsCarro)
// }

// carrito.forEach((prods) => {

//   let listaCarro = document.createElement("ul");
//   listaCarro.id = "txtProd";
//   listaCarro.innerHTML = `<li>Origen: ${prods.origen}</li>
//   <li>Precio: ${prods.precio}</li>
//   <li>Peso: ${prods.peso}</li>`;
//   carritoDiv.appendChild(listaCarro);

// });
