const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (checkInputs()) {
        e.currentTarget.submit()
    }
})

function checkInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    let isValid = true

    if (emailValue === "") {
        setErrorFor(email, "O e-mail é obrigatório!")
        isValid = false
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Endereço de e-mail inválido!")
        isValid = false
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória!")
        isValid = false
    } else {
        setSuccessFor(password)
    }
    
    return isValid
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