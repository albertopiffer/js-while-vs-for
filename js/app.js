//creo array
//fincheè la sua lunghezza non è 10 chiedo numeri all'utente e inserisco nell'array solo quelli dispari
//con un ciclo stampo l'intero array

let list = []

while (list.length < 10) {
    let num = parseInt(prompt('Inserire un numero:'))
    if (num % 2 != 0) {
        list.push (num)
    }
}

for (let i = 0; i < list.length; i++) {
    console.log (list [i])
}
