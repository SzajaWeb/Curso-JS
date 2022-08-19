class Cafe {
  constructor(id, origen, precio, peso) {
    this.id = id;
    this.origen = origen;
    this.precio = precio;
    this.peso = peso;
  }
}

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

    contenedor.appendChild(btn);

    producto.appendChild(contenedor);
  }
}
crearProducto();

const prods = document.getElementsByClassName("btnAgr");




  for (let i = 0; i < prods.length; i++) {
    prods[i].addEventListener("click", clickAgrCarro);
  }
 

function clickAgrCarro(e) {

  console.log(e.target.className)
  }

