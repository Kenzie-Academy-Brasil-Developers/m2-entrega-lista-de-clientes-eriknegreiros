export class Render {
    static renderClients(array) {
        
        const ul = document.querySelector('.container')
        array.forEach((element) => {
            const li = document.createElement('li')
            const h2 = document.createElement('h2')
            const div = document.createElement('div')
            const h3 = document.createElement('h3')
            const email = document.createElement('p')
            const idade = document.createElement('p')
            const cpf = document.createElement('p')
            const sexo = document.createElement('p')

            const div2 = document.createElement('div')
            const endereco = document.createElement('h3')
            const cep = document.createElement('p')
            const estado = document.createElement('p')
            const cidade = document.createElement('p')
            const bairro = document.createElement('p')
            const rua = document.createElement('p')
            const numero = document.createElement('p')

            li.classList.add('card')

            h2.innerText = element.nome
            h3.innerText = 'Dados Pessoais'
            email.innerText = element.email
            idade.innerText = element.idade
            cpf.innerText = element.cpf
            sexo.innerText = element.sexo

            endereco.innerText = 'Endereço'
            cep.innerText = element.endereco.cep
            estado.innerText = element.endereco.estado
            cidade.innerText = element.endereco.cidade
            bairro.innerText = element.endereco.bairro
            rua.innerText = element.endereco.rua
            numero.innerText = element.endereco.numero

            div2.append(endereco, cep, estado, cidade, bairro, rua, numero)
            div.append(h3, email, idade, cpf, sexo)
            li.append(h2, div, div2)
            ul.append(li)
        })
    }
}