const { contatos } = require("./contatos")

function dadosUsuarios(){

    return contatos['whats-users']
    
}

function dadosProfile(numero){

    let lsDadosProfile = false

    contatos['whats-users'].forEach(function(dados){

        if((dados.number) == (numero)){

            lsDadosProfile = {
                'nickname': dados.nickname,
                'account' : dados.account,
                'image' : dados["profile-image"],
                'background': dados.background,
                'number' : dados.number,
                'account_creation': dados["created-since"].start,
                'account_closure': dados["created-since"].end,
            }
        }
    })
    return lsDadosProfile
}

function dadosContatosUsuario(){

    let lsContatosUsuarios = false

    contatos['whats-users'].forEach(function(dados){
        if((dados.number) == (numero)){

            contatos
        }
    })
    return lsContatosUsuarios
}
console.log(dadosUsuarios())
console.log(dadosProfile(11987876567))
console.log(dadosContatosUsuario(11987876567))