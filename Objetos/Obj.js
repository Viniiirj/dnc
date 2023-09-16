class Jogador {
    constructor(nome,posicao,numgol){
        this.nome = nome
        this.posicao = posicao
        this.numgol = numgol
}
    golsMarcados(){
        console.log(`O ${this.nome} já marcou ${this.numgol} gols em sua carreira`)
    }
}
const Neymar = new Jogador('Neymar', 'Goleiro', 45)

Neymar.golsMarcados()