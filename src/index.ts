function desejarBoasVindas(nome: string, idade: string, telefoneFixo?: string) {
    if (telefoneFixo) {
        console.log(`Bem vindo ${nome}, voce tem ${idade} anos de idade e seu telefone fixo e ${telefoneFixo}`)
    } else {
        console.log(`Bem vindo ${nome}, voce tem ${idade} anos de idade`)
    }
}

const mensagemBoasVindas = desejarBoasVindas("Pedro", "20", "324002-8922")

console.log(mensagemBoasVindas)