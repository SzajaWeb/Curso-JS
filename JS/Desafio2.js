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

function crearProducto() {
  debugger;
  let producto = document.getElementById("productos");

  for (producto of origenes) {
    let contenedor = document.createElement("div");
    contenedor.className = "cafe";
    let lista = document.createElement("ul");
    lista.id = "txtProd";
    lista.innerHTML = `<li>Origen: ${origenes.origen}</li>
    <li>Precio: ${origenes.precio}</li>
    <li>Peso: ${origenes.peso}</li>`;
    let btn = document.createElement("button");
    btn.className = "btnAgr";
  }
}

for (let i = 0; i < 8; i++) {
  crearProducto();
}

