let confirmacion = true;
let valor = 0;
let peso1 = 0;
let cuotas = 0;
let valorf = 0;
let valort = 0;

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

do {
  let encargo = prompt(
    "Bienvenidos a vulkano coffee, indique el origen de cafe que desea encargar, le recordmos que contamos con BRASIL | HONDURAS | INDIA | PERU | COLOMBIA | MEXICO | GUATEMALA | ETIOPIA "
  );
  encargo = encargo.toUpperCase();
  let busqueda = origenes.find((producto) => producto.origen.includes(encargo));
  valor = busqueda.precio;
  peso1 = busqueda.peso;
  confirmacion = confirm(`usted eligio ${encargo}, es correcto?`);
} while (confirmacion != true);

alert(`el precio a pagar es de $ ${valor} por ${peso1} `);

let cuotificar = confirm(
  "desea cuotificar su compra? esto tendria un recargo del %15"
);
if(cuotificar == true){
function calcInteres() {
  valort = valor * 1.15;
  valorf = valort / cuotas;
  confirm(
    `el valor de su cuota es de $ ${valorf.toFixed(2)} y el valor total es $ ${valort.toFixed(2)}`
  );
}

do {
  cuotas = parseInt(prompt("ingrese la cantidad de cuotas:"));
} while (cuotas != 3 && cuotas != 6 && cuotas != 12);

if (cuotas == 3) {
  valorf = valor / cuotas;
  calcInteres();
} else if (cuotas == 6) {
  calcInteres();
} else if (cuotas == 12) {
  calcInteres();
}
}
alert("MUCHAS GRACIAS POR SU COMPRA!!")