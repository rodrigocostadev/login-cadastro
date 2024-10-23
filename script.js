
const loginform = document.getElementById("loginForm")
const message = document.getElementById("message")
const btnCadastro = document.getElementById("cadastro")

const username = document.getElementById("user")
const password = document.getElementById("password")

let userData = localStorage.getItem("userData") // recarrega a lista de cadastros
let userDataParse = JSON.parse(userData) //transforma de elemento json para o original (array de objetos)

let userForm
let passwordForm

let indexPassword



// EVENTO USADO PARA FILTRAR O NOME DE USUÁRIOS CADASTRADOS COM O EVENTO CHANGE
username.addEventListener("change", function(){

    let filteredUser = userDataParse.filter( user => user.nome == username.value);
    // console.log(filteredUser)

    // o index do usuário filtrado vai ser usado para verificar a senha
    let filteredIndex = userDataParse.findIndex( user => user.nome == username.value);
    indexPassword = filteredIndex  
    // console.log(filteredIndex)  

    // mostra usuário filtrado
    console.log(filteredUser[0].nome)  
    userForm = filteredUser[0].nome

    if (filteredUser.length > 0) {
        console.log("Usuário encontrado:", filteredUser[0]);
    } else {
        console.log("Usuário não encontrado.");
    }
})



// EVENTO USADO PARA FILTRAR E VERIFICAR A SENHA DE USUÁRIOS CADASTRADOS COM O EVENTO CHANGE
password.addEventListener("change", function(){    

    // index do usuário filtrado para verificar a senha
    // Pega o objeto que foi filtrado pelo index do usuário para verificar a senha
    // let filteredObjectPassword = userDataParse[filteredIndex] 
    let filteredObjectPassword = userDataParse[indexPassword] 
    let finalPassword = filteredObjectPassword.password
    passwordForm = finalPassword
    //mostra a senha
    console.log(finalPassword)
    console.log(password.value)

    if(finalPassword == password.value){
        console.log("A SENHA ESTA OK")
    }else{
        console.log("SENHA NÃO OK")
    }
})   

    

loginform.addEventListener("submit", function(event){

    event.preventDefault()   

    // const username = document.getElementById("user").value
    // const password = document.getElementById("password").value 
    
    if(username.value == "admin" && password.value == "123"){
        // window.location.href = "home.html"
        window.location.href = "/admin/admin.html"
    }else if(username.value == userForm && password.value == passwordForm){
        window.location.href = "/home/home.html"
    }else{
        message.innerHTML = '((( Login ou Senha Incorreto )))'
    }

    // if(username == "admin" && password == "123"){
    //     // window.location.href = "home.html"
    //     window.location.href = "/admin/admin.html"
    // }else if(username == "home" && password == "123"){
    //     window.location.href = "/home/home.html"
    // }else{
    //     message.innerHTML = '((( Login ou Senha Incorreto )))'
    // }
})

btnCadastro.addEventListener("click",function(event){
    event.preventDefault(
    window.location.href = "/cadastro/cadastro.html"
    )
})









































// const loginForm = document.getElementById("loginForm")
// const messageDiv = document.getElementById("message")


// loginForm.addEventListener("submit", function(event){
//     event.preventDefault()

//     const username = document.getElementById("username").value
//     const password = document.getElementById("password").value

//     if(username == "admin" && password == "123"){
//         window.location.href = "home.html"
//     }
//     else if(username == "user" && password == "user"){
//         window.location.href = "home.html"
//     }
//     else{
//         messageDiv.textContent = "Usuário ou senha incorreto"
//     }
// })
























// const link = document.getElementById('meuLink');

// link.addEventListener('click', function(event) {
//   event.preventDefault(); // Previne o comportamento padrão de abrir o link
//   alert('O link foi bloqueado!');
// })





// let a = 5;
// for( i = 0; i < a; i++){
//     // a++
//     console.log(i + "a")
// }

// console.log ("acabou") 

///////////////////////////////////////////////////////////////////////////////////

// let n = 0;

// while (n < 9) {
//     n++
//     console.log(n + "n")
// }

// console.log(n)
// console.log("n maior que 90 finish")

///////////////////////////////////////////////////////////////////////////////////

// let num =  Math.random() * 100

// while ( num < 90){
//     console.log(num)
//     num = Math.random() * 100
// }

// console.log(num)
// console.log("numero maior que 90, FINISH")

///////////////////////////////////////////////////////////////////////////////////

// function media (n1,n2){
//     let nota1 = n1
//     let nota2 = n2
//     let media = (nota1 + nota2) / 2
//     console.log(media)
// }

// media(4,5)