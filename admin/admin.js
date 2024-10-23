
///////////////////////////////// CARREGAR BANCO DE DADOS PARA MOSTRAR NA TELA //////////////////////////////////////
const ul = document.getElementById("list")

document.addEventListener("DOMContentLoaded", () => {
    let userData = localStorage.getItem("userData")
    let userDataParse = JSON.parse(userData)
    // console.log("esse é o user data LS" + userData)
    console.log(userDataParse)

    

    for ( let i = 0; i < userDataParse.length; i++){
        let createLi = document.createElement("li")
        ul.appendChild(createLi)

        createLi.innerHTML = 
        `<div class="item">
             ${userDataParse[i].nome}, ${userDataParse[i].age}, ${userDataParse[i].email}, ${userDataParse[i].password}
                <span>
                    <button class="editar">Editar</button>
                    <button class="excluir" data-index="${i}">Excluir</button>
                </span>
        <div>`
        // createLi.innerHTML = (userDataParse[i].nome, userDataParse[i].age,userDataParse[i].email,userDataParse[i].password)
    }

    const deleteButtons = document.querySelectorAll(".excluir")

    deleteButtons.forEach(button => { //varre todos os botoes excluir
        button.addEventListener("click", (event) =>{ //add evento click em todos os botoes
            const index = event.target.getAttribute("data-index") //pega o argumento data index do elemento clicado
            console.log(index)
            excluirItem(index)
        })
    });
})

function excluirItem (index){
    let userData = localStorage.getItem("userData") // recarrega a lista de cadastros
    let userDataParse = JSON.parse(userData) //transforma de elemento json para o original (array de objetos)

    userDataParse.splice(index,1)
    console.log(userDataParse)

    localStorage.setItem("userData", JSON.stringify(userDataParse))

    location.reload() //recarrega a pagina para atualizar a lista
}

///////////////////////////////// BOTAO SAIR //////////////////////////////////////

const buttonLogout = document.getElementById("logout")

buttonLogout.addEventListener("click", function(event){
    event.preventDefault()
    window.location.href = "../index.html"
})


///////////////////////////////// BOTAO API //////////////////////////////////////

const api = document.getElementById("api")

api.addEventListener("click", function(event){
    event.preventDefault()
    window.location.href = "/api/api.html"
})

///////////////////////////////// BOTAO LIMPAR BANCO DE DADOS //////////////////////////////////////

const btnClearAll = document.getElementById("clearAll")

btnClearAll.addEventListener("click", function(){
    localStorage.removeItem("userData")
    location.reload() //recarrega a pagina para atualizar a lista
})