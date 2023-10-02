//Arreglo invertido
/*Escribe una función que invierta los valores de un arreglo y los devuelva.*/
function reversa(arr) {
    // tu código aquí
    let rev = arr.reverse();
    return arr;
}
   
var result = reversa(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]