/* 
let cuota = 0
let montototal = 0

let monto = parseFloat(prompt("ingrese mono a solciitar"))

const pedircuota=()=>{
    let cuotas = parseInt(prompt( " ingrese cantidad de cuotas , no mayor a 20"));

while(cuotas > 20 || cuotas < 0){
    cuotas = parseInt(prompt("ingrese en cuantas cuotas , no mayor a 20 ni menor a 0"))
}
return cuotas; }

const cuotas = pedircuota ()

if( cuotas <= 10){
    monto = monto *1.1;
    console.log("cuotas" + monto)
}else{
    monto = monto * 1.2;
    console.log("cuotas " + monto)
}
if (monto <= 10000){
    montototal = monto * 1.1;
    console.log("montototal" +montototal)
}else if( monto > 10000 && monto < 20000){
    montototal = monto *1.15;
    console.log("montototal" +montototal)
}else{
    montototal = monto * 1.25;
    console.log("monto" + montototal)
}*/

const Servicio = function (tarjeta, mantenimiento, limite){
   this.tarjeta = tarjeta
   this.mantenimiento = mantenimiento
   this.limite = limite 
}

let servicio1 = new Servicio ("gold",7000, 500000)
let servicio2 = new Servicio ("platino",11000, 1000000 )
let servicio3 = new Servicio ("black", 19000, 2000000)

let lista =[ servicio1,servicio2,servicio3 ]
let resultado

function flitrarServicio(){
    let pedirtarjeta = prompt( "Por cual tarjeta quiere consultar")
    resultado = lista.find (banco => banco.tarjeta == pedirtarjeta)
    console.log(resultado)
    return resultado
}

const valor=flitrarServicio()
console.log(valor)

if ( valor.tarjeta === "gold" || valor.tarjeta === "platino" || valor.tarjeta === "black"){
    console.table(resultado)
}else{
    Swal.fire({
        icon: 'error',
        title: 'el valor no es valido',
        text: ' Las opciones son Gold , Platino ; Black',
        footer: '<a href="">Why do I have this issue?</a>'
      });
}


function incorporartarjeta(){
    let tarjeta = prompt ("ingresar nombre de la nueva tarjeta")
    let mantenimiento = parseInt(prompt ("ingresa el costo anual de la tarjeta"))
    let limite = parseInt(prompt (" ingresa el limite mensual de la tarjeta"))

    if(isNaN(mantenimiento) || isNaN(limite)){ 
        Swal.fire("Por favor ingresar valores validos");
    return;
}

let servicio = new Servicio ( tarjeta,mantenimiento,limite)

lista.push(servicio)
console.table(lista)

incorporartarjeta()
}

  
  const carrito = [];

  const monedasInput = document.getElementById("monedas");
  const cantidadInput = document.getElementById("cantidad");
  const carritoElement = document.getElementById("carrito");
  const agregarBoton = document.getElementById("agregarBoton");
  const guardarBoton = document.getElementById("guardarBoton");

  agregarBoton.addEventListener("click", agregarMoneda);
  guardarBoton.addEventListener("click", guardarCarrito);

  function agregarMoneda() {
      const monedas = monedasInput.value;
      const cantidad = parseFloat(cantidadInput.value);

      if (!isNaN(cantidad) && cantidad > 0) {
          carrito.push({ monedas, cantidad });
          actualizarCarrito();
          limpiarCampos();
      } else {
         Swal.fire("Por favor ingresar valores validos");
      }
  }

  function actualizarCarrito() {
      carritoElement.innerHTML = "";

      carrito.forEach(item => {
          const listitem = document.createElement("li");
          listitem.textContent = `${item.monedas} - cantidad ${item.cantidad}`;
          carritoElement.appendChild(listitem);
      });
  }

  function guardarCarrito() {
      if (typeof Storage !== "undefined") {
          const carritoJSON = JSON.stringify(carrito);
          localStorage.setItem("carritoData", carritoJSON);
          alert("Carrito guardado en local S");
          carrito.length = 0;
          actualizarCarrito();
      } else {
        Swal.fire("Tu navegador no soporta Local S");
      }
  }

  function cargarCarritoDesdeLocalStorage() {
      const carritoJSON = localStorage.getItem("carritoData");
      if (carritoJSON) {
          carrito.push(...JSON.parse(carritoJSON));
          actualizarCarrito();
      }
  }

  function limpiarCampos() {
      monedasInput.value = "";
      cantidadInput.value = "";
  }

  cargarCarritoDesdeLocalStorage();


  fetch("./productos.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    const tarjetas = data.Tarjetas;

    const Tarjetascontainer = document.getElementById("tarjetas-container");

    tarjetas.forEach((x) => {
        const tarjetasElement = document.createElement("p");
        tarjetasElement.innerText = `servicio: ${x.servicio}, mantenimiento: ${x.mantenimiento}, limite: ${x.Limite}`;
        Tarjetascontainer.appendChild(tarjetasElement);
    });
})
.catch(error => {
    console.log("fetch error:", error);
});


