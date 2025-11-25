class Pessoa {
    identidade: string

    constructor (identidade: string) {
        this.identidade = identidade
    }
}

function obterIdentidade<T extends Pessoa>(pessoa: T) {
    console.log(`Identidade: ${pessoa.identidade}`)
}

class Medico extends Pessoa {}

const medicoUm = new Medico("1288378")

obterIdentidade(medicoUm)