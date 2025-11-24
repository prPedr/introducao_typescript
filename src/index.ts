interface pessoaProps {
    nome: string
    dizerOi(): void
}

class Medico implements pessoaProps {
    nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    dizerOi(): void {
        console.log(`Boa tarde, me chamdo ${this.nome} e serei seu medico`)
    }
}

class Enfermeiro implements pessoaProps {
    nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    dizerOi(): void {
        console.log(`Boa tarde, me chamdo ${this.nome} e serei seu enfermeiro`)
    }
}

const newMedico = new Medico("Pedro")
newMedico.dizerOi()

const newEnfermeiro = new Enfermeiro("Gabriel")
newEnfermeiro.dizerOi()