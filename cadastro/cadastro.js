
///////////////////////////////// BOTAO SAIR //////////////////////////////////////

// import { saveData } from "../api/api.js"

const buttonLogout = document.getElementById("logout")

buttonLogout.addEventListener("click", function(event){
    event.preventDefault()
    // window.location.href = "../index.html"
    window.location.href = "https://rodrigocostadev.github.io/login-cadastro/index.html"
})

///////////////////////////////// BOTAO CADASTRO //////////////////////////////////////

const inputName = document.getElementById("name")
const inputAge = document.getElementById("age")
const inputEmail = document.getElementById("email")
const inputPassword = document.getElementById("password")
const btnCadastro = document.getElementById("cadastro")
const message = document.getElementById("message")

// let objects = []
let objectsJson = ""

btnCadastro.addEventListener("click", function(event){
    event.preventDefault()

    // Não realiza o cadastro se tiver algum input vazio
    if( inputName.value && inputAge.value && inputEmail.value && inputPassword.value != ""){ 

        let obj = {
            nome: inputName.value,
            age: inputAge.value,
            email: inputEmail.value,
            password: inputPassword.value
        }
        let objectsLS = localStorage.getItem("userData")

        let objects = objectsLS ? JSON.parse(objectsLS) : []
    
        console.log(obj)
        objects.push(obj)
        // let objects = localStorage.getItem("user")
        let objectsJson = JSON.stringify(objects)
        console.log(objects)
        console.log(objectsJson)

        // localStorage.removeItem("userData")

        localStorage.setItem("userData",JSON.stringify(objects))
        
        let userData = localStorage.getItem("userData")
        console.log("esse é o user data LS" + userData)
    
        inputName.value = ""
        inputAge.value= ""
        inputEmail.value= ""
        inputPassword.value= ""
        message.innerHTML = "Cadastro Criado com Sucesso"
        setTimeout(() => {
            message.innerHTML = ""
        }, 2000);

    }
})


        // TESTE DE ENVIO PARA BACK END QUE FALHOU
    //     fetch('../api/api.html', {
    //         method:'POST',
    //         headers: {
    //             'content-type' : 'application/json'
    //         },
    //         body: JSON.stringify(objects)
    //     })
    //     .then(response => response.json())
    //     .then( objects => {
    //         console.log('sucesso', objects)
    //     })
    //     .catch((error) => {
    //         console.error('Erro:', error)
    //     })



// inputName.addEventListener("change",function(){
//     console.log(inputName.value)
// })
// inputAge.addEventListener("change",function(){
//     console.log(inputAge.value)
// })
// inputEmail.addEventListener("change",function(){
//     console.log(inputEmail.value)
// })
// inputPassword.addEventListener("change",function(){
//     console.log(inputPassword.value)
// })

// console.log("tudo ok")