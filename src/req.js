class Pokemon {
    constructor(parametro1, parametro2){
        this.nome = parametro1
        this.idade = parametro2
        this.alive = true
    }

    falar(){
        console.log(this.nome.substring(0, 4) + " " + this.nome)
    }
}

let myPoke = new Pokemon("GO", 26)
//myPoke.alive = false
myPoke.falar()