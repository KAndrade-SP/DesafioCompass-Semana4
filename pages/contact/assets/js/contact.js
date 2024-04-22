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

/*=============== SUPPORT FORM ===============*/
function sendMessage() {

    const firstName = document.getElementById('first-name-input').value
    const lastName = document.getElementById('last-name-input').value
    const email = document.getElementById('email-input').value
    const message = document.getElementById('description-text-area').value

    const validation = checkData(firstName, lastName, email, message)

    if (validation) {
        localStorage.setItem("userData", JSON.stringify(validation))
        const userData = JSON.parse(localStorage.getItem('userData'))
        console.log(userData)
        // localStorage.removeItem('userData')
    }
}

function checkData(firstName, lastName, email, message) {

    const spanElement = document.getElementById('support-division-span')

    const fName = firstName.trim().toLowerCase()
    const lName = lastName.trim().toLowerCase()
    const mail = email.trim()
    const msg = message.trim() 

    const validName = /^[a-zA-ZÀ-ÿ' ]+$/
    const validEmail = /^\S+@\S+\.\S+$/

    if (fName === '' || lName === '' || mail === '' || msg === '') {
        spanElement.innerText = "There are empty fields in the form"
    } else {
        if (validName.test(fName) && validName.test(lName) && validEmail.test(mail)) {
           
            spanElement.innerText = "Data sent successfully!"
            const completeName = capitalizeName(fName, lName)

            return {
                nome: completeName,
                email: mail,
                message: msg
            }
        } else {
            spanElement.innerText = "There is invalid data in the form"
        }
    }
}

function capitalizeName(firstName, lastName) {
    const stringName = firstName + ' ' + lastName
    const completeName = stringName.split(/\s+/)

    for (let i = 0; i < completeName.length; i++) {
        completeName[i] = completeName[i][0].toUpperCase() + completeName[i].substring(1)
    }

    return completeName.join(" ")
}

/*=============== SUBSCRIBE FORM ===============*/
function subscribe() {

    const email = document.getElementById('subscribe-input').value
    const validation = checkEmail(email)

    if (validation) {
        localStorage.setItem("subscribeContactData", JSON.stringify(validation))
        const subscribeContactData = JSON.parse(localStorage.getItem('subscribeContactData'))
        console.log(subscribeContactData)
        // localStorage.removeItem('subscribeContactData')
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