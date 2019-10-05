'use strict'

//TIpo de cambio

var inpNum1 = document.querySelector('#numero1')
var inpResultado = document.querySelector('#resultado')
var btnConvertir = document.querySelector ('#btnConvertir')

btnConvertir.addEventListener('click', () => {

    if ((Number(inpNum1.value) % 2 == 0)) {
        inpResultado.value = (inpNum1.value + ' x 0.051 = ' + inpNum1.value * 0.051 + ' Dolares')

    } else {
        inpResultado.value = (inpNum1.value + ' x 0.047 =' + inpNum1.value * 0.047 + ' Euros')

    }
})

