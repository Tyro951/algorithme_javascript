class Pokemon {
    constructor(name, attack, defense, hp, luck){
    this.name = name
    this.attack = attack
    this.defense = defense
    this.hp = hp
    this.luck = luck
}
  islucky(){
    let random = Math.random()
    if(this.luck > random){
        return true 
    }
    else{
        return false
    }
  }
  attackPokemon(adversaire) {

            let attaque = this.attack - adversaire.defense
            if(this.islucky()) {
            console.log(this.name + ' a infligé ' + attaque + ' points de dégâts ')
            adversaire.hp = adversaire.hp - attaque

                if(adversaire.hp <= 0){
                    console.log(adversaire.name + ' est mort ! Il restait ' + this.hp +' points de vie à ' + this.name )
                }
                else{
                    console.log(adversaire.name + ' a perdu ' + attaque + ' points de vie, il lui reste ' + adversaire.hp +' points de vie !')
                }
            }   

            else{
                console.log(this.name + ' a raté son attaque ! ')
            }

}}


let pikachu = new Pokemon("pikachu", 112, 67, 210, 1)
let tortank= new Pokemon("tortank", 106, 75, 260, 0.7)

while(pikachu.hp > 0 && tortank.hp > 0) {
    pikachu.attackPokemon(tortank)
    if(tortank.hp > 0){
    tortank.attackPokemon(pikachu)} 
}