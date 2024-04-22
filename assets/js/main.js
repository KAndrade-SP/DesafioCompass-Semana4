/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== SUBSCRIBE FORM ===============*/
function subscribe() {

    const email = document.getElementById('subscribe-input').value
    const validation = checkEmail(email)

    if (validation) {
        localStorage.setItem("subscribeHomeData", JSON.stringify(validation))
        const subscribeHomeData = JSON.parse(localStorage.getItem('subscribeHomeData'))
        console.log(subscribeHomeData)
        // localStorage.removeItem('subscribeHomeData')
    }
}

function checkEmail(email) {

    const spanElement = document.getElementById('subscribe-span')
    const inputElement = document.getElementById('subscribe-input')

    const mail = email.trim()
    const validEmail = /^\S+@\S+\.\S+$/

    if (mail === '') {
        spanElement.innerText = "The email field is empty"
        inputElement.className = "subscribe__input-invalid-data"
    } else {

        if (validEmail.test(mail)) {
            spanElement.innerText = "Data sent successfully!"
            inputElement.className = "subscribe__input-valid-data"
            return { email: mail }
        } else {
            spanElement.innerText = "There is invalid data in the form"
            inputElement.className = "subscribe__input-invalid-data"
        }

    }
}