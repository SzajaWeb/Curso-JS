debugger;
let cuotas = 0;
let valorf = 0;
let valort = 0;

function calcInteres() {
  valort = valori * 1.05;
  valorf = valort / cuotas;
  confirm(
    `el valor de su cuota es de $ ${valorf} y el valor total es $ ${valort}`
  );
}

let valori = parseFloat(prompt("ingrese el valor de su compra a cuotificar: "));

do {
  cuotas = parseInt(
    prompt(
      "ingrese la cantidad de cuotas: 1 3 6 12, tenga en cuenta que en 1 y 3 pagos no tiene recargo, en 6 y 12 tiene recargo del 5%"
    )
  );
} while (cuotas != 1 && cuotas != 3 && cuotas != 6 && cuotas != 12);

if (cuotas == 1) {
  confirm("el valor de su cuota es de $" + valori);
} else if (cuotas == 3) {
  valorf = valori / cuotas;
  confirm("el valor de su cuota es de $" + valorf);
} else if (cuotas == 6) {
  calcInteres();
} else if (cuotas == 12) {
  calcInteres();
}
