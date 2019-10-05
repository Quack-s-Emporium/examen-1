
var boletos = document.querySelector('#boletos')
var seccion = document.querySelector('#seccion')
var genero = document.querySelector('#genero')
var btnComparar = document.querySelector ('#btnCalcular')
var inpResultado = document.querySelector ('#resultado')
var inpDescuento = document.querySelector('#descuento')

btnComparar.addEventListener('click', () => {
    let precioZona
    
    switch (seccion.value) {
       
        case 'general':
        case 'General':
            (precioZona) = 500
            break;
        case 'plata':
        case 'Plata':
            (precioZona) = 750
            break;
        case 'oro':
        case 'Oro':
            (precioZona) =1000
            break;
        case 'vip':
        case 'VIP':
            (precioZona) = 1500
            break;    
    }

switch (genero.value) {
    case 'masculino':
    case 'Masculino':
    case 'Másculino':   
    if (boletos.value >= 3) {
        inpDescuento.value = ('Descuento del 10%')
        window.alert  ('10 x ' + precioZona + ' / 100 =' + (precioZona - ((precioZona*10)/100))+ '$ ' + ' Precio con descuento')
        inpResultado.value = ('Entonces ' + (precioZona - ((precioZona*10)/100)) + ' x ' + boletos.value + ' = ' + ((precioZona - ((precioZona*10)/100)) * boletos.value) + '$')
    } else {
        inpDescuento.value = ('No cuenta con descuentos activos')
        inpResultado.value = (precioZona + ' x ' + boletos.value + ' = ' + precioZona * boletos.value)
    }
    break;

    case 'femenino':
    case 'Femenino':
        if (boletos.value >= 5) {
            inpDescuento.value = ('Descuento del 15%')
            window.alert  ('15 x ' + precioZona + ' / 100 =' + (precioZona - ((precioZona*15)/100))+ '$ ' + ' Precio con descuento')
            inpResultado.value = ('Entonces ' + (precioZona - ((precioZona*15)/100)) + ' x ' + boletos.value + ' = ' + ((precioZona - ((precioZona*15)/100)) * boletos.value) + '$')

        } else {
            inpDescuento.value = ('No aplica para descuentos')
            inpResultado.value = (precioZona + ' x ' + boletos.value + ' = ' + precioZona * boletos.value)
        }
    break;



}


})