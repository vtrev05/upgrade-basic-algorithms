'use strict';

//ITERATION 6

/* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.

1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'. */

//1.1
for (let index = 0; index < 10; index++) {

    console.log(`Estoy en la vuelta ${index} del bucle`)
    
}
//1.2
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`Estoy en la vuelta ${i} del bucle`)
    }
    
}

//1.3
for (let i = 0; i < 10; i++) {
    
    if (i !== 9) {
        console.log('Me estoy intentando dormir')
    } else{
        console.log('Me dormí')}
}
