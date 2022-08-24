import {
    request
} from "../Controller/api.js"

export class Delete {
    static async renderDelete() {
        const clientList = await request.listarClientes()
        const select = document.querySelector('.selecionar')

        clientList.forEach(element => {
            const option = document.createElement('option')

            option.innerText = element.nome

            option.id = element.id

            select.append(option)
        });
    }

    static async deleteUser(event) {

        event.preventDefault()
        const clientList = await request.listarClientes()

        const selected = document.querySelector('.selecionar').value

        const data = clientList.find((element) => {
            return element.nome === selected
        })

        idSelecionado = data.id

        await request.deletarCliente(idSelecionado)
    }
}

let idSelecionado = 0

const deleteBtn = document.querySelector('.deletando')
deleteBtn.addEventListener('click', Delete.deleteUser)

Delete.renderDelete()