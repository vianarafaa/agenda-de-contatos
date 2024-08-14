const form = document.querySelector('form')
const inputNomeContato = document.getElementById('input-contato')
const inputNumeroContato = document.getElementById('input-numero')
const tableBody = document.querySelector('tbody')

let linhas = ''
const contatos = []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    adicionaLinhas()
    atualizaAgenda()

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
})

function adicionaLinhas() {
    if (contatos.includes(inputNomeContato.value)) {
        alert(`Contato já existente`)
    } else {
        contatos.push(inputNomeContato.value)

        let linha = `<tr>
            <td>${inputNomeContato.value}</td>
            <td>${inputNumeroContato.value}</td>
        </tr>`

        linhas += linha
    }
}

function atualizaAgenda() {
    tableBody.innerHTML = linhas
}
