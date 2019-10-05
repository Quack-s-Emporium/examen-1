'use strict'

// Sueldo
var username = document.querySelector('#username')
var password = document.querySelector('#password')
var hours = document.querySelector('#hours')
var inpResultado = document.querySelector('#resultado')
var btnCalcular = document.querySelector('#btnCalcular')

btnCalcular.addEventListener('click', () => {

    if (username.value == 'user' && password.value == '12A34') {
        inpResultado.value = (hours.value + ' x ' + ' 75 = ' + hours.value * 75 + '$') 

    } else if 
        (username.value == 'admin' && password.value == '76Z54' ) {
            inpResultado.value = (hours.value + ' x ' + ' 125 = ' + hours.value * 125 + '$')
        }    

        else {
            inpResultado.value = ('Datos incorrectos o no tiene autorizacion')
        } 

    

     

    
        
   
    

})