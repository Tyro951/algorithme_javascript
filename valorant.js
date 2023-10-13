let winattaque = 0
let windefense = 0

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let manche = 0

while( winattaque < 13 && windefense < 13 ){
    let probakillattaque = 0.5 
    manche += 1 
    let defenseurs = [
        " Pheonixdef",
        " Jettdef",
        " Omendef",
        " Fadedef",
        " Chamberdef"
    ]
    let attaquants = [
        " Pheonixatt",
        " Jettatt",
        " Omenatt",
        " Fadeatt",
        " Chamberatt"
    ]
    while( defenseurs.length != 0 && attaquants.length != 0 ){
        var bonneflash = true
        let random = Math.random()

        /* debut du bonus1 jett 80% de chande de first blood */

        let probakilljettattaque = 0.8

        if(Math.random() <= probakilljettattaque && defenseurs.length == 5 && attaquants.length == 5){

            let jettattaquant = attaquants[1]
            let randomdefenseur = getRandomInt(defenseurs.length)
            let defenseur = defenseurs[randomdefenseur]
            console.log(jettattaquant + ' a tué' + defenseur + ' quel clutch de la part de jett !')
            defenseurs.splice(randomdefenseur, 1)

            if(Math.random() <= 0.6 && attaquants.length == 5 && defenseurs.length == 4){

                probakillattaque = 0.7
                console.log('le spike a été planté')
            }

            else if(Math.random() >= 0.6 && attaquants.length == 5 && defenseurs.length == 4){

                probakillattaque = 0.5
                /* début du bonus 2 et 3 smoke omen et flash pheonix */

                let omensmoke = 0.5
                let pheonixflash = 0.5

                if( Math.random() <= pheonixflash){
                    if( Math.random() <= 0.8){
                        probakillattaque = 0.6
                        console.log('Pheonix coté attaque lance une belle flash qui permet aux attaquants de prendre l avantage')
                        var bonneflash = true
                    }
                    else{
                        probakillattaque = 0.3
                        var bonneflash = false
                        console.log('Pheonix coté attaque est en train de se faire flame suite à cette flash catastrophique, les defenseurs prennent l avantage')
                    }
                }

                if( Math.random() <= omensmoke){

                    probakillattaque = 0.6

                    if( bonneflash == false ){
                        probakillattaque = 0.3
                        console.log('Pheonix coté attaque est en train de se faire flame suite à cette flash catastrophique, malgrès la belle smoke d Omen les defenseurs prennent l avantage')
                        var bonneflash = true
                    }

                    console.log('Smoke du coté attaquant de la part d omen très bien placé les attaquants on désormais l avantage dans les duels.')
                }

                /* suite ligne 107 et fin du bonus 2 ligne 161 */
            }
        }
        /* fin du bonus 1 de l exo */
        else if(random <= probakillattaque){

            let randomattaquant = getRandomInt(attaquants.length)
            let attaquant = attaquants[randomattaquant]
            let randomdefenseur = getRandomInt(defenseurs.length)
            let defenseur = defenseurs[randomdefenseur]
            console.log(attaquant + ' a tué' + defenseur )
            defenseurs.splice(randomdefenseur, 1)
            

            if(Math.random() <= 0.6 && attaquants.length == 5 && defenseurs.length == 4){

                probakillattaque = 0.7
                console.log('le spike a été planté')

            }

            else if(Math.random() >= 0.6 && attaquants.length == 5 && defenseurs.length == 4){

                probakillattaque = 0.5
                /* suite du bonus 2 et 3 smoke omen et flash omen */

                let omensmoke = 0.5
                let pheonixflash = 0.5

                if( Math.random() <= pheonixflash){
                    if( Math.random() <= 0.8){
                        probakillattaque = 0.6
                        console.log('Pheonix coté attaque lance une belle flash qui permet aux attaquants de prendre l avantage')
                        var bonneflash = true
                    }
                    else{
                        probakillattaque = 0.3
                        console.log('Pheonix coté attaque est en train de se faire flame suite à cette flash catastrophique, les defenseurs prennent l avantage')
                        var bonneflash = false
                    }
                }

                if( Math.random() <= omensmoke){

                    probakillattaque = 0.6

                    if( bonneflash == false ){
                        probakillattaque = 0.3
                        console.log('Pheonix coté attaque est en train de se faire flame suite à cette flash catastrophique, malgrès la belle smoke d Omen les defenseurs prennent l avantage')
                        var bonneflash = true
                    }

                    console.log('Smoke du coté attaquant de la part d omen très bien placé les attaquants on désormais l avantage dans les duels.')
                }
                /* fin du bonus 2 ligne 161 */
            }

        }

        else if(random >= probakillattaque){

            let randomattaquant = getRandomInt(attaquants.length)
            let attaquant = attaquants[randomattaquant]
            let randomdefenseur = getRandomInt(defenseurs.length)
            let defenseur = defenseurs[randomdefenseur]
            console.log(defenseur + ' a tué' + attaquant )
            attaquants.splice(randomattaquant, 1)
            

            if(Math.random() <= 0.4 && attaquants.length == 4 && defenseurs.length == 5){
                probakillattaque = 0.7
                console.log('le spike a été planté')
            }

            else if(Math.random() >= 0.4 && attaquants.length == 4 && defenseurs.length == 5){

                probakillattaque = 0.5

                /* Suite du bonus 2 et 3 smoke d'omen et flash de pheonix */

                let omensmoke = 0.5
                let pheonixflash = 0.5

                if( Math.random() <= pheonixflash){
                    if( Math.random() <= 0.8){
                        probakillattaque = 0.6
                        console.log('Pheonix coté attaque lance une belle flash qui permet aux attaquants de prendre l avantage')
                        var bonneflash = true
                    }
                    else{
                        probakillattaque = 0.3
                        console.log('Pheonix coté attaque est en train de se faire flame suite à cette flash catastrophique, les defenseurs prennent l avantage')
                        var bonneflash = false
                    }
                }

                if( Math.random() <= omensmoke){

                    probakillattaque = 0.6

                    if( bonneflash == false ){
                        probakillattaque = 0.3
                        console.log('Pheonix coté attaque est en train de se faire flame suite à cette flash catastrophique, malgrès la belle smoke d Omen les defenseurs prennent l avantage')
                        var bonneflash = true
                    }

                    console.log('Smoke du coté attaquant de la part d omen très bien placé les attaquants on désormais l avantage dans les duels.')
                }
                /* fin du bonus 2 et 3! */
            }

        }
        console.log(attaquants)
        console.log(defenseurs)
    }
    if(attaquants.length == 0){
        windefense = windefense + 1
        console.log('les défenseurs ont gagné la manche numéro ' + manche + ' les survivants sont :' + defenseurs)
    }
    if(defenseurs.length == 0){
        winattaque = winattaque + 1
        console.log('les attaquants ont gagné la manche numéro ' + manche + ' les survivants sont :' + attaquants )
    }
    console.log(winattaque)
    console.log(windefense)
}

if(winattaque == 13){
    console.log('les attaquants on gagné la partie... ils ont tous écris ggez... encore des bronzes')
}
if(windefense == 13){
    console.log('les defenseurs on gagné la partie ggwp ils ont étaient meilleurs')
}
