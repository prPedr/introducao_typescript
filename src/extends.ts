class Pessoa {
    nome: string
    id: string

    constructor (nome: string, id: string) {
        this.nome = nome
        this.id = id
    }

    apresentar(): void {
        console.log(`${this.nome} ${this.id}`)
    }
}

class Medico extends Pessoa {
    apresentar(): void {
        console.log(`Ola, sou o ${this.nome}, sou Programador e meu ID e ${this.id}`)
    }
}

const medico = new Medico("Pedro", "1")
medico.apresentar()