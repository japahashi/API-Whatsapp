const express = require('express')
const cors = require('cors')

const app = express()

const corsOptions = {
    origin: ['*'],
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))

const funcoes = require('./model/funcoes.js')

app.get('/v1/senai/usuarios', function (request, response) {
    const usuarios = funcoes.listarDadosUsuarios()
    return response.status(200).json(usuarios)
})

app.get('/v1/senai/dados/conta/:number', function (request, response) {
    const numero = request.params.number
    const resultado = funcoes.listarDadosConta(numero)

    if (resultado) {
        return response.status(200).json(resultado)
    }

    return response.status(404).json({ message: "Nenhum contato foi encontrado" })
})

app.get('/v1/senai/dados/contatos/:number', function (request, response) {
    const numero = request.params.number
    const resultado = funcoes.listarDadosContatos(numero)

    if (resultado) {
        return response.status(200).json(resultado)
    }

    return response.status(404).json({ message: "Nenhum contato foi encontrado" })
})

app.get('/v1/senai/mensagens/conta/:number', function (request, response) {
    const numero = request.params.number
    const resultado = funcoes.listarMensagens(numero)

    if (resultado) {
        return response.status(200).json(resultado)
    }

    return response.status(404).json({ message: "Nenhum contato foi encontrado" })
})

app.get('/v1/senai/conversas/conta/contato', function (request, response) {
    const numero = request.query.number
    const nomeContato = request.query.nome

    const resultado = funcoes.listarMensagensContato(numero, nomeContato)

    if (resultado) {
        return response.status(200).json(resultado)
    }

    return response.status(404).json({ message: "Nenhum contato foi encontrado" })
})

app.get('/v1/senai/filtrar/conta/contato/palavra', function (request, response) {
    const numero = request.query.number
    const nomeContato = request.query.nome
    const palavra = request.query.palavra

    const resultado = funcoes.filtrarConversa(numero, nomeContato, palavra)

    if (resultado) {
        return response.status(200).json(resultado)
    }

    return response.status(404).json({ message: "Nenhum contato foi encontrado" })
})

app.get('/v1/senai/help', function(request, response){
    const docAPI = {
        api_description: "API para manipular dados de um whatsapp",
        data: "2026-04-02",
        development: "Israel Fujimoto",
        version: 1.0,
        endpoints: [
            {
                rota: "/v1/senai/usuarios",
                description: "Retorna a lista de todos os usuários"
            },
            {
                rota: "/v1/senai/dados/conta/:number",
                description: "Retorna dados de um usuário pelo número"
            },
            {
                rota: "/v1/senai/dados/contatos/:number",
                description: "Retorna contatos de um usuário"
            },
            {
                rota: "/v1/senai/mensagens/conta/:number",
                description: "Retorna mensagens de um usuário"
            },
            {
                rota: "/v1/senai/conversas/conta/contato?number=&nome=",
                description: "Retorna conversa com um contato"
            },
            {
                rota: "/v1/senai/filtrar/conta/contato/palavra?number=&nome=&palavra=",
                description: "Filtra mensagens por palavra"
            }
        ]
    }

    return response.status(200).json(docAPI)
})

app.listen(8080, function () {
    console.log('API aguardando novas requisições ...')
})