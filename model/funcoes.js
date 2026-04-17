const { contatos } = require("./funcoes.js")

function listarDadosUsuarios() {
    return contatos["whats-users"]
}

function listarDadosConta(numero) {
    let dadosConta = false

    contatos["whats-users"].forEach(function (usuario) {
        if (numero == usuario.number) {
            dadosConta = {
                "account": usuario.account,
                "nickname": usuario.nickname,
                "profile_image": usuario["profile-image"],
                "background": usuario.background,
                "account_creation": usuario["created-since"].start,
                "account_closure": usuario["created-since"].end
            }
        }
    })

    return dadosConta
}

function listarDadosContatos(numero) {
    let listaContatos = []
    let resultado = false

    contatos["whats-users"].forEach(function (usuario) {
        if (numero == usuario.number) {
            usuario.contacts.forEach(function (contato) {
                listaContatos.push({
                    "name": contato.name,
                    "image": contato.image,
                    "description": contato.description
                })
            })
        }
    })

    if (listaContatos.length > 0) {
        return listaContatos
    }

    return resultado
}

function listarMensagens(numero) {
    let listaMensagens = []
    let resultado = false

    contatos["whats-users"].forEach(function (usuario) {
        if (numero == usuario.number) {
            usuario.contacts.forEach(function (contato) {
                listaMensagens.push(contato.messages)
            })
        }
    })

    if (listaMensagens.length > 0) {
        return listaMensagens
    }

    return resultado
}

function listarMensagensContato(numeroUser, nomeContato) {
    let dadosUsuario = {}
    let mensagensContato = []
    let resultado = false

    contatos["whats-users"].forEach(function (usuario) {
        if (numeroUser == usuario.number) {

            usuario.contacts.forEach(function (contato) {
                if (nomeContato.toUpperCase() == contato.name.toUpperCase()) {
                    mensagensContato.push(contato.messages)
                }
            })

            dadosUsuario = {
                "name": usuario.account,
                "numero": usuario.number,
                "mensagens": mensagensContato
            }
        }
    })

    if (mensagensContato.length > 0) {
        return dadosUsuario
    }

    return resultado
}

function filtrarConversa(numero, nomeContato, palavra) {
    let mensagensFiltradas = []
    let resultado = false

    contatos["whats-users"].forEach(function (usuario) {
        if (numero == usuario.number) {
            usuario.contacts.forEach(function (contato) {
                if (nomeContato == contato.name) {

                    contato.messages.forEach(function (mensagem) {
                        if (mensagem.content.toLowerCase().includes(palavra.toLowerCase())) {
                            mensagensFiltradas.push(mensagem)
                        }
                    })

                }
            })
        }
    })

    if (mensagensFiltradas.length > 0) {
        return mensagensFiltradas
    }

    return resultado
}

module.exports = {
    listarDadosUsuarios,
    listarDadosConta,
    listarDadosContatos,
    listarMensagens,
    listarMensagensContato,
    filtrarConversa
}