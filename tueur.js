let nom = "jason"
let hp = 100
vie = 1
vie1 = 1
vie2 = 1
vie3 = 1
vie4 = 1
let prenom = [
    "jean",
    "bertrand",
    "kelly",
    "mira",
    "adam",
    "nicolas",
    "ines",
    "nawel"
]

let caracteristiques = [
    "mécano",
    "toubib",
    "sportif",
    "nerd",
    "psychopathe",
    "peureux",
    "vaillant",
    "blonde"
]

class survivants {
    constructor(name, caracteristiques, probamort, probadegats, probamortdeg){
    this.name = name
    this.caracteristiques = caracteristiques
    this.probamort = probamort
    this.probadegats = probadegats
    this.probamortdeg = probamortdeg
}}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let random = getRandomInt(8)
let survivant1 = new survivants(prenom[random], caracteristiques[random], Math.random(), Math.random(), Math.random() )
prenom.splice(random, 1)
caracteristiques.splice(random, 1)

let random1 = getRandomInt(7)
let survivant2 = new survivants(prenom[random1], caracteristiques[random1], Math.random(), Math.random(), Math.random() )
prenom.splice(random1, 1)
caracteristiques.splice(random1, 1)

let random2 = getRandomInt(6)
let survivant3 = new survivants(prenom[random2], caracteristiques[random2], Math.random(), Math.random(), Math.random() )
prenom.splice(random2, 1)
caracteristiques.splice(random2, 1)

let random3 = getRandomInt(5)
let survivant4 = new survivants(prenom[random3], caracteristiques[random3], Math.random(), Math.random(), Math.random() )
prenom.splice(random3, 1)
caracteristiques.splice(random3, 1)

let random4 = getRandomInt(4)
let survivant5 = new survivants(prenom[random4], caracteristiques[random4], Math.random(), Math.random(), Math.random() )
prenom.splice(random4, 1)
caracteristiques.splice(random4, 1)

console.log(survivant1)
console.log(survivant2)
console.log(survivant3)
console.log(survivant4)
console.log(survivant5)
let degatsesquive = 10
let degatsmort = 15
while (hp > 0 && (vie > 0 || vie1 > 0 || vie2 > 0 || vie3 > 0 || vie4 > 0)) {
    if(vie>0 && hp > 0){
        if( Math.random() < survivant1.probamort){
            console.log(survivant1.name + ' est mort')
            vie -=1
        }
        else if( Math.random() < survivant1.probadegats){
            console.log(survivant1.name + ' a esquivé et inflige ' + degatsesquive + ' points de dégats !')
            hp = hp-degatsesquive
        }
        else if( Math.random() < survivant1.probamortdeg){
            console.log(survivant1.name + ' est mort et inflige ' + degatsmort + ' points de dégats !')
            hp = hp-degatsmort
            vie -=1
        }
    }
    if(vie1>0  && hp > 0){
        if( Math.random() < survivant2.probamort){
            console.log(survivant2.name + ' est mort')
            vie1 -=1
        }
        else if( Math.random() < survivant2.probadegats){
            console.log(survivant2.name + ' a esquivé et inflige ' + degatsesquive + ' points de dégats !')
            hp = hp-degatsesquive
            
        }
        else if( Math.random() < survivant2.probamortdeg){
            console.log(survivant2.name + ' est mort et inflige ' + degatsmort + ' points de dégats !')
            hp = hp-degatsmort
            vie1 -=1
            
        }
    }
    if(vie2>0  && hp > 0){
        if( Math.random() < survivant3.probamort){
            console.log(survivant3.name + ' est mort')
            vie2 -=1
            
        }
        else if( Math.random() < survivant3.probadegats){
            console.log(survivant3.name + ' a esquivé et inflige ' + degatsesquive + ' points de dégats !')
            hp = hp-degatsesquive
            
        }
        else if( Math.random() < survivant3.probamortdeg){
            console.log(survivant3.name + ' est mort et inflige ' + degatsmort + ' points de dégats !')
            hp = hp-degatsmort
            vie2 -=1
            
        }
    }
    if(vie3>0  && hp > 0){
        if( Math.random() < survivant4.probamort){
            console.log(survivant4.name + ' est mort')
            vie3 -=1
            
        }
        else if( Math.random() < survivant4.probadegats){
            console.log(survivant4.name + ' a esquivé et inflige ' + degatsesquive + ' points de dégats !')
            hp = hp-degatsesquive
            
        }
        else if( Math.random() < survivant4.probamortdeg){
            console.log(survivant4.name + ' est mort et inflige ' + degatsmort + ' points de dégats !')
            hp = hp-degatsmort
            vie3 -=1
            
        }
    }
    if(vie4 > 0  && hp > 0){
        if( Math.random() < survivant5.probamort){
            console.log(survivant5.name + ' est mort')
            vie4 -=1
            
        }
        else if( Math.random() < survivant5.probadegats){
            console.log(survivant5.name + ' a esquivé et inflige ' + degatsesquive + ' points de dégats !')
            hp = hp-degatsesquive
            
        }
        else if( Math.random() < survivant5.probamortdeg){
            console.log(survivant5.name + ' est mort et inflige ' + degatsmort + ' points de dégats !')
            hp = hp-degatsmort
            vie4 -=1

        }
    }
    if(hp <= 0){
        console.log(nom + ' est mort, bien joué aux survivants !')
    }
}