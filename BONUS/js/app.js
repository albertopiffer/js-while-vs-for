//creo un array list e un altro array ordList in cui andrò a mettere glie elementi del primo in disordine
//genero un numero random < list.lenght e inserisco l'elemento [rand] del primo array nel secondo
//rimuovo l'elemento dal primo array e ripeto l'operazione fino a svuotare list

let list = []
let ordList = []

for (let i=0; i<10; i++) {
    list [i] = i
}

console.log (list)

for (let i=0; i<10; i++) {
    let rand = Math.floor(Math.random() * list.length)

    //console.log ('rand: ', rand)
    //console.log ('lenght: ', list.length)
    
    ordList [i] = list [rand]
    list.splice (rand, 1)

    //console.log (list)
    //console.log (ordList)
}

console.log (ordList)
