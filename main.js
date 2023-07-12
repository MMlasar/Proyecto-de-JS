let cuota = 0
let montototal = 0

let monto = parseFloat(prompt("ingrese mono a solciitar"))
cuotas = parseInt(prompt("ingrese cantidad de cuotas , no mayor a 20"))

while(cuotas > 20 || cuotas < 0){
    cuotas = parseInt(prompt("ingrese en cuantas cuotas , no mayor a 20 ni menor a 0"))
}
if( cuotas <= 10){
    monto = monto *1,1;
}else{
    monto = monto * 1,2;
}
if (monto < 10000){
    montototal = monto * 1,1;
}else if( monto > 10000 && monto < 20000){
    montototal = monto *1.15;
}else{
    montototal = monto * 1,25;
}

console.log(montototal);