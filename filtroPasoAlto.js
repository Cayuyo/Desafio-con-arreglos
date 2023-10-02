//Filtro paso alto
/*Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff*/
function pasoAlto(arr, cutoff) {
    var filteredArr = [];
    //codigo aqui
    for (let i = 0; i < arr.length; i++) {
        //valore mayores a cutoff
        if ((arr[i] > cutoff)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}
var resultado = pasoAlto([6, 8, 3, 10, -2, 5, 9], 5);
console.log(resultado); // se espera de vuelta [6, 8, 10, 9]