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

    let firstName = document.getElementById('first-name-input').value
    let lastName = document.getElementById('last-name-input').value
    let email = document.getElementById('email-input').value
    let message = document.getElementById('description-text-area').value

    const validation = checkData(firstName, lastName, email, message)

    if (validation) {
        //true
    } else {
        //false
    }
}

function checkData(firstName, lastName, email, message) {

    let completeName
    const fName = firstName.trim().toLowerCase()
    const lName = lastName.trim().toLowerCase()
    const mail = email.trim()
    const msg = message.trim() 

    const validName = /^[a-zA-ZÀ-ÿ' ]+$/
    const validEmail = /^\S+@\S+\.\S+$/

    if (fName === '' || lName === '' || mail === '' || msg === '') {
        console.log('campos vazios')
    } else {

        if (validName.test(fName) && validName.test(lName) && validEmail.test(mail)) {
            completeName = capitalizeName(fName, lName)
            console.log(completeName)
            console.log('email válido ' + mail + '!')
        } else {
            console.log('dados inválidos')
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
