//Siempre hambriento
/* Escribe una función a la que se le asigne un arreglo, y cada vez que el valor 
sea "comida" debería mostrar "delicioso"en la consola. Si "comida" no estaba presente 
en el arreglo, que la consola registre "Tengo hambre" una vez. */
function siempreHambriento(arr) {
    //Codigo aqui
    let tengoHambre = true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "comida") {
            console.log("delicioso");
            tengoHambre = false;
        }
    }
    if (tengoHambre) {
        console.log("Tengo hambre");
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debe mostrar "delicioso", "delicioso"

siempreHambriento([4, 1, 5, 7, 2]);
// esto deberia mostrar "Tengo hambre"