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
    } else {
        //false
    }
}

function checkEmail(email) {

    const mail = email.trim()
    const validEmail = /^\S+@\S+\.\S+$/

    if (mail === '') {
        console.log('campo vazio')
    } else {

        if (validEmail.test(mail)) {
            return { email: mail }
        } else {
            console.log('dados inválidos')
        }

    }
}