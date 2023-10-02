//Mejor que el promedio
/*Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio*/
function mejorQueElPromedio(arr) {
    var sum = 0;
    //calcular promedio
    for (var i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }
    sum /= arr.length;
    //console.log("promedio: " +sum);

    var count = 0;
    //contar cuantas variables son mayor que el promedio
    for (var j = 0; j < arr.length; ++j) {
        if ((arr[j] > sum)) {
            count++;
        }
    }
    return count;
}

var resultado = mejorQueElPromedio([6, 8, 3, 10, -2, 5, 9]);
console.log(resultado); //se espera 4 de vuelta