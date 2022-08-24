import {request} from "../Controller/api.js"

export class Create{

    static createUser(){
      const nomeInput = document.querySelector('.createName')  
      const emailInput = document.querySelector('.createEmail')
      const idadeInput = document.querySelector('.createIdade')
      const cpfInput = document.querySelector('.createCpf')
      const sexoInput = document.querySelector('.createSexo')

      const cepInput = document.querySelector('.createCep')
      const ruaInput = document.querySelector('.createRua')
      const numeroInput = document.querySelector('.createNumero')
      const bairroInput = document.querySelector('.createBairro')
      const cidadeInput = document.querySelector('.createCidade')
      const estadoInput = document.querySelector('.createEstado')

      document.querySelector('.createUserBtn')?.addEventListener('click', async function(event){
       
        event.preventDefault()
        
        const base = {
            nome: nomeInput.value,
            email: emailInput.value,
            idade: idadeInput.value, 
            cpf:cpfInput.value, 
            sexo: sexoInput.value,
           endereco:{
            cep: cepInput.value,
            rua: ruaInput.value,
            numero: numeroInput.value,
            bairro: bairroInput.value,
            cidade: cidadeInput.value,
            estado: estadoInput.value
           }
        }
        await request.cadastrarCliente(base)
      })
    }
  }

Create.createUser()

