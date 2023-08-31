

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

function flitrarServicio() {
    const pedirTarjetaInput = document.getElementById("monedas");
    const pedirTarjeta = pedirTarjetaInput.value;

    resultado = lista.find(banco => banco.tarjeta === pedirTarjeta);
    return resultado;
}

const valor = flitrarServicio();

const incorporarBoton = document.getElementById("incorporarBoton");

incorporarBoton.addEventListener("click", incorporarTarjeta);

function incorporarTarjeta() {
    const nuevaTarjetaInput = document.getElementById("nuevaTarjeta");
    const costoAnualInput = document.getElementById("costoAnual");
    const limiteMensualInput = document.getElementById("limiteMensual");

    const nuevaTarjeta = nuevaTarjetaInput.value;
    const costoAnual = parseInt(costoAnualInput.value);
    const limiteMensual = parseInt(limiteMensualInput.value);

    if (isNaN(costoAnual) || isNaN(limiteMensual)) {
        Swal.fire("Por favor ingresar valores válidos");
        return;
    }

    let servicio = new Servicio(nuevaTarjeta, costoAnual, limiteMensual);

    lista.push(servicio);
    console.table(lista);
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


