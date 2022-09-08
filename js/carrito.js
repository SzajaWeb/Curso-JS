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
            docecuotas: "12 cuotas",
          },
        },
      }).then((res) => {
        let valorcuota = 0;
        switch (res.value) {
          case "unacuota":
            Swal.fire({
              icon: "success",
              title: `el precio final es $ ${precioFinal}`,
            });
            break;
          case "trescuotas":
            precioFinal = precioFinal * 1.15;
            valorcuota = precioFinal / 3;
            Swal.fire({
              icon: "success",
              title: `el precio final es $ ${precioFinal.toFixed(2)} y el valor de cada cuota es $ ${valorcuota.toFixed(2)}`,
            });
            break;
          case "seiscuotas":
            precioFinal = precioFinal * 1.15;
            valorcuota = precioFinal / 6;
            Swal.fire({
              icon: "success",
              title: `el precio final es $ ${precioFinal.toFixed(2)} y el valor de cada cuota es $ ${valorcuota.toFixed(2)}`,
            });
            break;
          case "docecuotas":
            precioFinal = precioFinal * 1.15;
            valorcuota = precioFinal / 12;
            Swal.fire({
              icon: "success",
              title: `el precio final es $ ${precioFinal.toFixed(2)} y el valor de cada cuota es $ ${valorcuota.toFixed(2)}`,
            });
            break;
        }
      });
    } else if (result.isDenied) {
      Swal.fire({
        icon: "success",
        title: "Gracias por su compra!!",
      });
    }
  });
  cuerpo.innerHTML = `<p id= "txtCarritoVacio" >tu carrito esta vacio</p>`;
  txtPrecio.innerText = `PRECIO: $ 0`;
});

recuperoProdsLS();
cargarProds();
const txtPrecio = document.querySelector("#precioFinal");
txtPrecio.innerText += `PRECIO: $ ${precioFinal}`;
