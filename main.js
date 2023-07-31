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
}

const Servicio = function (tarjeta, mantenimiento, limite){
   this.tarjeta = tarjeta
   this.mantenimeinto = mantenimeinto
   this.limite = limite 
}

let sercicio1 = new Servicio ("gold",7000, 500000)
let servicio2 = new Servicio ("platino",11000, 1000000 )
let servicio3 = new Servicio ("black", 19000, 2000000)

let lista =[ servicio1,servicio2,servicio3 ]

function flitrarServicio(){
    let pedirtarjeta = prmopt( "Por cual tarjeta quiere consultar")
    let resultado = lista.filter ((banco)=> banco.nombre.include(pedirtarjeta))
}

if(resultado = )

