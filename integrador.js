
const nombre = prompt("Bienvenida, indique su nombre");
let precio1 = 15000;
let precio2 = 10000;
const promos = alert(`Los productos en promocion son Televisor a $${precio1} y Celular a $${precio2}`);
const producto1 = confirm("Desea adquirir un televisor?");

let mensaje = "";


if(producto1){
    const cantidadProducto1 = Number(prompt("Cuantas unidades desea llevar"));
    precio1 = precio1*cantidadProducto1;
    mensaje+= `\n Televisor subtotal $${precio1} `    
} else {
    precio1=0;
};

const producto2 = confirm("Desea adquirir un celular?");

if(producto2){
    const cantidadProducto2 = Number(prompt("Cuantas unidades desea llevar"));
    precio2 = precio2*cantidadProducto2;
    mensaje+= `\n Celular subtotal $${precio2}`
} else{
    precio2=0;
};

let precioTotal = precio1 + precio2;
const nada = !producto1 && !producto2;
if(nada){
    alert("Muchas Gracias " + nombre);
    
};

if(producto1||producto2){
    alert(`Ud ha comprado: ${mensaje}, el total de su compra es $${precioTotal}`);

    const codigoCorrecto = "DescuentoPorRata";
    let descuento = 0.1;
    let codigo = confirm(`Tiene codigo de descuento?`);
    let nuevoPrecio = precioTotal - (precioTotal * descuento);

    if(codigo){
        codigoIngresado = prompt("Ingrese el codigo de descuento");

        if(codigoIngresado===codigoCorrecto){
            alert(`Bien Rata! obtuviste el descuento, Detalle de la compra: ${mensaje} \n El descuento es de 10%, y el total a pagar es de $${nuevoPrecio}`);

        } else {
            nuevoPrecio = precioTotal;
            alert(`Tu codigo es incorrecto, no obtuviste descuento, ${mensaje}`);
        }
    
        const pago = confirm("Desea abonar con tarjeta de credito?");

        if(pago){
            let cuotas = Number(prompt("Desea abonar en 3, 6 o 12 cuotas?"));

            if(isNaN(cuotas)){
                alert("No ingreso el numero de cuotas, intente la compra nuevamente");
            
            } 
            else if(cuotas===3){
                alert(`Detalle de la compra: ${mensaje} \n El descuento es de 10%, y el total a pagar es de $${nuevoPrecio} \n Por pagar en 3 cuotas tiene un interes de 5% \n
                Total $${nuevoPrecio*1.05}
                Muchas gracias por su compra ${nombre}`);
            }   
            else if(cuotas===6){
                alert(`Detalle de la compra: ${mensaje} \n El descuento es de 10%, y el total a pagar es de $${nuevoPrecio} \n Por pagar en 6 cuotas tiene un interes de 10% \n
                Total $${nuevoPrecio*1.10}
                Muchas gracias por su compra ${nombre}`);
            } 
            else if(cuotas===12){
                alert(`Detalle de la compra: ${mensaje} \n El descuento es de 10%, y el total a pagar es de $${nuevoPrecio} \n Por pagar en 12 cuotas tiene un interes de 15% \n
                Total $${nuevoPrecio*1.15}
                Muchas gracias por su compra ${nombre}`);
            }

        } else {
            if(codigoIngresado===codigoCorrecto){
                alert(`Detalle de la compra: ${mensaje} \n El descuento es de 10%, y el total a pagar es de $${nuevoPrecio} en efectivo\n 
                Total $${nuevoPrecio}
                Muchas gracias por su compra ${nombre}`);
            }
            else{
                alert(`Detalle de la compra: ${mensaje} \n No posee codigo de descuento o el mismo es incorrecto \n 
                Total $${nuevoPrecio} \n Muchas gracias por su compra ${nombre}`);
            }
            
        }
    } else {    
        const pago = confirm("Desea abonar con tarjeta de credito?");

        if(pago){

            let cuotas = Number(prompt("Desea abonar en 3, 6 o 12 cuotas?"));

            if(isNaN(cuotas)){
                alert("No ingreso el numero de cuotas");
            } 
            else if(cuotas===3){
                alert(`Detalle de la compra: ${mensaje} \n Por pagar en 3 cuotas tiene un interes de 5% \n
                Total $${precioTotal*1.05}`);
            }
            else if(cuotas===6){
                alert(`Detalle de la compra: ${mensaje} \n  Por pagar en 6 cuotas tiene un interes de 10% \n
                Total $${precioTotal*1.1}`);
            }
            else if(cuotas===12){
                alert(`Detalle de la compra: ${mensaje} \n Por pagar en 12 cuotas tiene un interes de 15% \n
                Total $${precioTotal*1.15}`);
            }

        } 
        else{
            alert(`Detalle de la compra: ${mensaje} \n No posee codigo de descuento o el mismo es incorrecto \n 
            Total $${precioTotal} \n Muchas gracias por su compra ${nombre}`);  
        }  
    }
}