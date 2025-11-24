interface enderecoProps {
    cep: string
    rua: string
    numero: string
    bairro: string
}

interface pacienteProps {
    nome: string
    idade: string
    readonly cpf: string
    internado: boolean
    endereco?: enderecoProps
}

const pacienteUm: pacienteProps = {
    nome: "Pedro",
    idade: "20",
    cpf: "12345678-00",
    internado: true,
    endereco: {
        cep: "00000-00",
        rua: "Rua teste",
        numero: "000",
        bairro: "Teste"
    }
}

const pacienteDois: pacienteProps = {
    nome: "Bruno",
    idade: "20",
    cpf: "12345678-01",
    internado: false
}

console.log(pacienteUm)
console.log(pacienteDois)