function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "Sammyla" && password == "08062005") {
        window.location = "final.html";
        return false;
    }
    else {
        alerta();
        return false;
    }
}

function alerta() {
    swal("Desculpa!", "Não posso aceitar, você não parece ser Sammyla Machado! :(")
}
