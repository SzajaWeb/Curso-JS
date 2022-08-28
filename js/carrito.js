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
  if (carrito != "") {
    cuerpo.innerHTML = "";
  }
  carrito.forEach((prodAgr) => {
    cuerpo.innerHTML += `
      <ul class = "listaProdsCarro">
    
      <li>Origen: ${prodAgr.origen}</li>
      <li>Precio: ${prodAgr.precio}</li>
      <li>Peso: ${prodAgr.peso}</li>
      <li>Cant
      : ${prodAgr.cantidad}</li>
      </ul>`;
    precioFinal = precioFinal + prodAgr.precio * prodAgr.cantidad;
  });
}

document.getElementById("btnVaciar").addEventListener("click", () => {
  localStorage.removeItem("carrito");
  cuerpo.innerHTML = `<p id= "txtCarritoVacio" >tu carrito esta vacio</p>`;
  txtPrecio.innerText = `PRECIO: $ 0`;
});

document.getElementById("btnComprar").addEventListener("click", () => {
  Swal.fire({

    title: "Desea cuotificar su compra?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "SI",
    denyButtonText: `NO`,
  }).then((result) => {
  
    if (result.isConfirmed) {
      Swal.fire({
        title: "selecciona la cantidad de cuotas",
        input: "select",
        inputOptions: {
          Cuotas: {
            unacuota: "1 cuota",
            trescuotas: "3 cuotas",
            seiscuotas: "6 cuotas",
            doceCuotas: "12 cuotas",
          },
        },
      
      });
   
     
      
    } else if (result.isDenied) {
      Swal.fire({
        icon: "success",
        title: "Gracias por su compra!!",
      });
    }
  });
});


recuperoProdsLS();
cargarProds();
const txtPrecio = document.querySelector("#precioFinal");
txtPrecio.innerText += `PRECIO: $ ${precioFinal}`;