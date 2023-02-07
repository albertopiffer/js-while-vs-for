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
