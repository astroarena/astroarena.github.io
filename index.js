const burgerButton = document.getElementsByClassName('burgerButton')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]
const singinbutton = document.getElementsByClassName('singInButton')[0]

burgerButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active')
singinbutton.classList.toggle('active')
}
)

