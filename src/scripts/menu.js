const button = document.querySelector('.menu')
const nav = document.querySelector('.nav')

button.addEventListener('click', () => {
    nav.classList.toggle('nav-open')
    button.classList.toggle('change')
})