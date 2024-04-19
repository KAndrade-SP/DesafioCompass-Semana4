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
    } else {
        //false
    }
}

function checkData(firstName, lastName, email, message) {

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
            const completeName = capitalizeName(fName, lName)
            return {
                nome: completeName,
                email: mail,
                message: msg
            }
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
