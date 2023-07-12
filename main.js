let cuota = 0
let montototal = 0

let monto = parseFloat(prompt("ingrese mono a solciitar"))
let cuotas = parseInt(prompt("ingrese cantidad de cuotas , no mayor a 20"))

while(cuotas > 20 || cuotas < 0){
    cuotas = parseInt(prompt("ingrese en cuantas cuotas , no mayor a 20 ni menor a 0"))
}
if( cuotas <= 10){
    monto = monto *1.1;
    console.log("cuotas" + monto)
}else{
    monto = monto * 1.2;
    console.log("cuotas " + monto)
}
if (monto < 10000){
    montototal = monto * 1.1;
    console.log("montototal" +montototal)
}else if( monto > 10000 && monto < 20000){
    montototal = monto *1.15;
    console.log("montototal" +montototal)
}else{
    montototal = monto * 1.25;
    console.log("monto" + montototal)
}