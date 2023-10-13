function trajet(){

    let random = getRandomInt(5)
    let musique = musics[random]
    feu-=1
    if(musique == "Anissa - Wejdene"){
        vie-=1
        taxi++
        console.log(musique)
        console.log('il reste' + feu + ' feu rouge et j ai changé de taxi ' + taxi + ' fois.')
    }
    if(vie == 0){
        console.log('EXPLOSION, il a fait ' + taxi + ' changements de taxi')
    }
    if(feu == 0){
        console.log('il est arrivé a destination au bout de ' + taxi + ' changements de taxi et a ' + vie + ' de santé mental') 
    }

}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let feu = 30
let name = 'John'
let vie = 10
taxi = 0

let musics = [
    "Anissa - Wejdene",
    "MontageM Choral - PHONK REMIX",
    "Fifty-Fifty - Cupid",
    "Distant - Maes",
    "Mils 2.0 -Ninho"
]

while(feu > 0 && vie > 0){
    trajet()
}

