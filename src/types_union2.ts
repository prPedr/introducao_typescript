type TipoSanguineo = "A+" | "A-" | "O"

function exibirTipoSanquineo(tipoSanguineo: TipoSanguineo): void {
    console.log(`O tipo sanguineo é: ${tipoSanguineo}`)
}

exibirTipoSanquineo("A+")