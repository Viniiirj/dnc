// let jogador = {
//     nome: 'Renato Augusto',
//     posicao: 'Atacante',
//     numGol: 400,

//     }

const Jogador = function(nome, posicao, numGols) {
    Nome = nome,
    Posicao = posicao,
    Gols = numGols

    this.getNome = function(){
        return Nome
    }

    this.getPos = function(){
        return Posicao
    }

    this.getGol = function(){
        return Gols
    }
}

const Neymar = new Jogador('Neymar', 'Goleiro', 45)

console.log(Neymar.getPos())