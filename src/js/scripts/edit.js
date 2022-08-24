import {
  request
} from "../Controller/api.js"
import {
  Render
} from "../Controller/render.js"

export class Edit {

  

  static async renderEdit() {
    const clientList = await request.listarClientes()
    const select = document.querySelector('.selecionar')

    clientList.forEach((element) => {

      const option = document.createElement('option')

      option.innerText = element.nome

      option.id = element.id

      select.append(option)

    })
  }

  static async capturarDados(event) {
    event.preventDefault()

    const selected = document.querySelector('.selecionar').value
    const clientList = await request.listarClientes()

    const data = clientList.find((element) => {
      return element.nome === selected
    })

    idSelecionado = data.id

    const editName = document.querySelector('.editName')
    editName.value = data.nome

    const editEmail = document.querySelector('.editEmail')
    editEmail.value = data.email

    const editIdade = document.querySelector('.editIdade')
    editIdade.value = data.idade

    const editCpf = document.querySelector('.editCpf')
    editCpf.value = data.cpf

    const editSexo = document.querySelector('.editSexo')
    editSexo.value = data.sexo

    const editCep = document.querySelector('.editCep')
    editCep.value = data.endereco.cep

    const editRua = document.querySelector('.editRua')
    editRua.value = data.endereco.rua

    const editNumero = document.querySelector('.editNumero')
    editNumero.value = data.endereco.numero

    const editBairro = document.querySelector('.editBairro')
    editBairro.value = data.endereco.bairro

    const editCidade = document.querySelector('.editCidade')
    editCidade.value = data.endereco.cidade

    const editEstado = document.querySelector('.editEstado')
    editEstado.value = data.endereco.estado

  }

  static async editUser(event) {

    event.preventDefault()

    const editName = document.querySelector('.editName')
    const editEmail = document.querySelector('.editEmail')
    const editIdade = document.querySelector('.editIdade')
    const editCpf = document.querySelector('.editCpf')
    const editSexo = document.querySelector('.editSexo')

    const editCep = document.querySelector('.editCep')
    const editRua = document.querySelector('.editRua')
    const editNumero = document.querySelector('.editNumero')
    const editBairro = document.querySelector('.editBairro')
    const editCidade = document.querySelector('.editCidade')
    const editEstado = document.querySelector('.editEstado')
    
    const base = {
      nome: editName.value,
      email: editEmail.value,
      idade: editIdade.value,
      cpf: editCpf.value,
      sexo: editSexo.value,
      endereco: {
        cep: editCep.value,
        rua: editRua.value,
        numero: editNumero.value,
        bairro: editBairro.value,
        cidade: editCidade.value,
        estado: editEstado.value
      }
    }
    await request.editarCliente(idSelecionado, base)
  }
}

let idSelecionado = 0

const botaoAtualizar = document.querySelector('.atualizarBtn')
botaoAtualizar.addEventListener('click', Edit.capturarDados)

document.querySelector('.editBtn').addEventListener('click', Edit.editUser)

Edit.renderEdit()
Edit.editUser


