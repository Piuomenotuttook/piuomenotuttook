/* Efecto oscurecedor */
document.addEventListener('scroll', () => {
    const overlay = document.getElementById('overlay')
    const height = window.innerHeight / 8 
    if (scrollY >= height) {
        overlay.style.opacity = '0.6'
    } else if (scrollY <= height) {
        overlay.style.opacity = '0'
    }
})
/* add classlist modificarla dentro css */
/* Menu pop-up */
const menuOpen = document.getElementById('menu--button')
const menuClose = document.getElementById('close--btn')
const menuDisplayed = document.getElementById('menu--popup')
const header = document.getElementById('header')

menuOpen.addEventListener('click', () => {
/*   Primer intento  
    menuDisplayed.style.display = 'flex'
    menuDisplayed.style.flexDirection = 'column'
    menuDisplayed.style.justifyContent = 'center'
    menuOpen.style.display = 'none' */
    /* menuDisplayed.classList.add('menu--popup') */

    menuDisplayed.classList.add('active')
    menuDisplayed.classList.remove('hidden')

    menuOpen.style.display = 'none'

    header.style.position = 'relative'
    header.style.zIndex = '2'
})

menuClose.addEventListener('click', () => {
/*     menuDisplayed.style.display = 'none'
    menuOpen.style.display = 'block' */
    menuDisplayed.classList.add('hidden')
    menuDisplayed.classList.remove('active')
    menuOpen.style.display = 'block'
}) 

/* Room carousel */
let imgRouteUp = [  /* Ruta imgs arriba */
    'media/2-Pag1_arriba/img1.jpeg',
    'media/2-Pag1_arriba/img2.jpeg',
    'media/2-Pag1_arriba/img3.jpeg',
    'media/2-Pag1_arriba/img4.jpeg',
    'media/2-Pag1_arriba/img5.jpeg',
    'media/2-Pag1_arriba/img6.jpeg',
    'media/2-Pag1_arriba/img7.jpeg',
    'media/2-Pag1_arriba/img8.jpeg',
    'media/2-Pag1_arriba/img9.jpeg',
    'media/2-Pag1_arriba/img10.jpeg'
] 

let imgRouteDown = [  /* Ruta imgs abajo */
    'media/3-Pag1_abajo/img1.jpeg',
    'media/3-Pag1_abajo/img2.jpeg',
    'media/3-Pag1_abajo/img3.jpeg',
    'media/3-Pag1_abajo/img4.jpeg',
    'media/3-Pag1_abajo/img5.jpeg',
    'media/3-Pag1_abajo/img6.jpeg',
    'media/3-Pag1_abajo/img7.jpeg',
    'media/3-Pag1_abajo/img8.jpeg',
    'media/3-Pag1_abajo/img9.jpeg'
]

let indexUp = 0
let indexDown = 0
let interval
const changeTime = 2000
const imageUp = document.getElementById('image-up')
const imageDown = document.getElementById('image-down')

function changeImages() {
    setTimeout(() => {
        indexUp++
        indexDown++
        if (indexUp >= imgRouteUp.length) {
            indexUp = 0
        } else if (indexDown >= imgRouteDown.length) {
            indexDown = 0
        }
        imageUp.src = imgRouteUp[indexUp]
        imageDown.src = imgRouteDown[indexDown]
        
    }, 300)
}

function startInterval() {
    interval = setInterval(() => {
        changeImages()
    }, changeTime)
}

startInterval()

