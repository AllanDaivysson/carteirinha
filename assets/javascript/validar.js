function entrar(){
    usuario = document.getElementById("usuario").value;
    senha = document.getElementById("senha").value;
    erro = document.getElementById("menssagem-de-erro")
    error = document.querySelector("#menssagem-de-erro")
    user = "Admin";
    pass = "12345";

    if(user === "" || senha === ""){
        error.innerHTML = "Preencha todos os campos!"
        erro.style.display = "block"
    }else{ 
        if(user === usuario && senha === pass){
            window.location.href="assets/pages/home.html";
        }else{
            error.innerHTML = "Login ou senha incorretos!"
            erro.style.display = "block"
        }
    }

}