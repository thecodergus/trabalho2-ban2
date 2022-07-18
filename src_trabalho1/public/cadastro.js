const form = document.getElementById("form")
const username = document.getElementById("username")
const cpf = document.getElementById("cpf")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")
const telephone = document.getElementById("telephone")
const adress = document.getElementById("adress")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (checkInputs()) {
        e.currentTarget.submit()
    }
})

function checkInputs() {
    const usernameValue = username.value.trim();
    const cpfValue = cpf.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfirmationValue = passwordConfirmation.value.trim();
    const telephoneValue = telephone.value.trim();
    const adressValue = adress.value.trim();
    const check = true

    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuário é obrigatório!")
        check = false
    } else {
        setSuccessFor(username, "")
    }

    if (cpfValue === "") {
        setErrorFor(cpf, "O CPF é obrigatório!")
        check = false
    } else if (!checkCPF(cpfValue)) {
        setErrorFor(cpf, "CPF inválido!")
        check = false
    } else {
        setSuccessFor(cpf)
    }

    if (emailValue === "") {
        setErrorFor(email, "O e-mail é obrigatório!")
        check = false
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Endereço de e-mail inválido!")
        check = false
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória!")
        check = false
    } else {
        setSuccessFor(password)
    }

    if (telephoneValue === "") {
        setErrorFor(telephone, "O número de telefone é obrigatório!")
        check = false
    } else {
        setSuccessFor(telephone)
    }

    if (adressValue === "") {
        setErrorFor(adress, "O endereço é obrigatório!")
        check = false
    } else {
        setSuccessFor(adress)
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória!")
        check = false
    } else if (passwordValue != passwordConfirmationValue) {
        setErrorFor(passwordConfirmation, "Confirmação falhou, digite novamente!")
        check = false
    } else {
        setSuccessFor(passwordConfirmation)
    }

    if (check) {
        return true
    }
    
}

function setErrorFor(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector("small")
    small.innerText = message
    formControl.className = "form-control error"
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")
    small.innerText = message
    formControl.className = "form-control success"
}

function checkEmail(email) {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
}

function checkCPF(cpf) {
    var sum = 0
    var mod
    
    if (cpf == "00000000000") {
        return false
    }

    for (i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i)
    }

    mod = (sum * 10) % 11
    if ((mod == 10) || (mod == 11)) {
        mod = 0
    }

    if (mod != parseInt(cpf.substring(9, 10))) {
        return false
    }

    sum = 0
    for (i = 1; i <= 10; i++) {
        sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i)
    }

    mod = (sum * 10) % 11
    if ((mod == 10) || (mod == 11)) {
        mod = 0
    }

    if (mod != parseInt(cpf.substring(10, 11))) {
        return false
    }

    return true
}