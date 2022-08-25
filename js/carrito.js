const carrito = [];
const cuerpo = document.getElementById("carritoProds");

  
function recuperoProdsLS() {
  if (localStorage.carrito) {
    const prodsGuardados = JSON.parse(localStorage.getItem("carrito"));

    prodsGuardados.forEach((prod) => {
      carrito.push(prod);
    });
  }
}
let precioFinal = 0;
function cargarProds() {
  if( carrito != ""){
  cuerpo.innerHTML = "";
}
  carrito.forEach((prodAgr) => {
    cuerpo.innerHTML += `
      <ul class = "listaProdsCarro">
      <li>ID: ${prodAgr.id}</li>
      <li>Origen: ${prodAgr.origen}</li>
      <li>Precio: ${prodAgr.precio}</li>
      <li>Peso: ${prodAgr.peso}</li>
      <li>Cant
      : ${prodAgr.cantidad}</li>
      </ul>`;
    precioFinal = precioFinal + prodAgr.precio*prodAgr.cantidad;
  });
}



document.getElementById("btnVaciar").addEventListener("click", () => {
  localStorage.removeItem("carrito");
  cuerpo.innerHTML = `<p id= "txtCarritoVacio" >tu carrito esta vacio</p>`;
});

document.getElementById("btnComprar").addEventListener("click", () => {
    const finCompra = document.getElementById("carritoComp");
    finCompra.innerHTML = `<div id="finCompra">
    <p id= "txtFinCompra" >GRACIAS POR SU COMPRA</p>
  </div>`
})

const txtPrecio = document.querySelector("#precioFinal");
txtPrecio.innerText = `PRECIO: $ ${precioFinal}`;
recuperoProdsLS();
cargarProds();