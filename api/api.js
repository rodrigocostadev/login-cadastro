
///////////////////////////////// BOTAO VOLTAR //////////////////////////////////////

const buttonBack = document.getElementById("back")

buttonBack.addEventListener("click", function(event){
    event.preventDefault()
    // window.location.href = "../admin/admin.html"
    window.location.href = "https://rodrigocostadev.github.io/admin/admin.html"
})

///////////////////////////////// BOTAO SAIR //////////////////////////////////////

const buttonLogout = document.getElementById("logout")
const ul = document.getElementById("list")

buttonLogout.addEventListener("click", function(event){
    event.preventDefault()
    // window.location.href = "../index.html"
    window.location.href = "https://rodrigocostadev.github.io/index.html"
})

///////////////////////////////// TESTE //////////////////////////////////////



document.addEventListener("DOMContentLoaded", () => {
    let userData = localStorage.getItem("userData")
    let userDataParse = JSON.parse(userData)
    // console.log("esse é o user data LS" + userData)
    console.log(userDataParse)


    // let createLi = document.createElement("li")
    // ul.appendChild(createLi)
    // ul.innerHTML = userDataParse
    // createLi.innerHTML = userDataParse[0].nome
    // console.log(userDataParse.length)

    for ( let i = 0; i < userDataParse.length; i++){
        let createLi = document.createElement("li")
        ul.appendChild(createLi)
        createLi.innerHTML = `<div> ${userDataParse[i].nome}, ${userDataParse[i].age}, ${userDataParse[i].email}, ${userDataParse[i].password}<div>`
        // createLi.innerHTML = (userDataParse[i].nome, userDataParse[i].age,userDataParse[i].email,userDataParse[i].password)
    }
})









// const jsonData = getObjectJson()
// console.log(jsonData)

// let objects = [];

// export function saveData(obj) {
//     objects.push(obj);
//     console.log("Dados salvos:", objects);
// }

// export function getObjects() {
//     return objects; // Retorna os dados armazenados, se necessário
// }
