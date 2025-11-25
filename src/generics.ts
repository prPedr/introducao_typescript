class Pessoa {
    identidade: string

    constructor (identidade: string) {
        this.identidade = identidade
    }
}

function mostrarIdentidade<T extends Pessoa>(pessoa: T) {
    console.log(`Identidade: ${pessoa.identidade}`)
}

class Medico extends Pessoa {}
class Enfermeiro extends Pessoa {}

const medicoUm = new Medico("1818829329")
const medicoDois = new Medico("1980192391")

const enefermeiroUm = new Enfermeiro("198918389")
const enfermeiroDois = new Enfermeiro("1901903903")

mostrarIdentidade(medicoUm)
mostrarIdentidade(medicoDois)
mostrarIdentidade(enefermeiroUm)
mostrarIdentidade(enfermeiroDois)