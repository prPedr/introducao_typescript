class Pessoa {
    nome: string
    id: string

    constructor(nome: string, id: string) {
        this.nome = nome
        this.id = id
    }

    apresentar(): void {
        console.log(`Eu sou o ${this.nome} e meu ID e ${this.id}`)
    }
}

class Medico extends Pessoa {
    apresentar(): void {
        console.log(`Ola, eu sou o ${this.nome} e sou medico e meu ID e ${this.id}`)
    }
}

class Enfermeiro extends Pessoa {
    apresentar(): void {
        console.log(`Ola,eu sou o ${this.nome} e sou medico e meu ID e ${this.id}`)
    }
}

const pessoaUm = new Pessoa("Pedro", "1")
pessoaUm.apresentar()

const medicoUm = new Medico("Gabriel", "2")
medicoUm.apresentar()

const enfermeiroUm = new Enfermeiro("Carlos", "3")
enfermeiroUm.apresentar()