export class request {

    static baseUrl = 'https://atividade-api-clientes.herokuapp.com/clientes'

    static headers = {
        'Content-Type': 'application/json'
    }

    static async listarClientes() {
        const base = await fetch(this.baseUrl, {
                method: 'GET',
                headers: this.headers
            })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
        return base
    }

    static async cadastrarCliente(data) {
        const base = await fetch(this.baseUrl, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                setTimeout(() => {
                    window.location.assign("../../index.html")
                }, 500);
                return res
            })
            .catch(err => console.log(err))
        return base
    }

    static async pesquisaCliente(id) {
        const base = await fetch(`${this.baseUrl}/${id}`, {
                method: 'GET',
                headers: this.headers
            })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
        return base
    }

    static async editarCliente(id, data) {
        const base = await fetch(`${this.baseUrl}/${id}`, {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                setTimeout(() => {
                    window.location.assign("../../index.html")
                }, 500);
                return res
            })
            .catch(err => console.log(err))
        return base
    }

    static async deletarCliente(id) {
        const base = await fetch(`${this.baseUrl}/${id}`, {
                method: 'DELETE',
                headers: this.headers,
            })
            .then(res => res)
            .then(res => {
                setTimeout(() => {
                    window.location.assign("../../index.html")
                }, 500);
                return res
            })
            .catch(err => console.log(err))
        return base
    }

}