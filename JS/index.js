const menuBtn = document.getElementById('scroll-btn')
const mainMenu = document.getElementById('main_menu')
let menuOn = 0

menuBtn.addEventListener('click', () => {
  if (menuOn === 0) {
    menuOn = 1
    mainMenu.style.animation = "menuAnimation 2s ease-in-out"
    menuBtn.style.animation = "buttonAnimationUp 2s ease-in-out"
    setTimeout(() => {
      mainMenu.style.removeProperty('animation')
      mainMenu.style.bottom = "-17.4rem"
      mainMenu.style.zIndex = "2"
      menuBtn.style.removeProperty('animation')
      menuBtn.style.backgroundColor = "white"
      menuBtn.style.boxShadow = "inset 0 0 20px rgba(0, 0, 0, 0.4)"
      menuBtn.style.rotate = "180deg"
      menuBtn.style.bottom = "0"
    }, 1900)
  }else {
    menuOn = 0
    mainMenu.style.zIndex = "-1"
    mainMenu.style.animation = "menuAnimationReverse 2s ease-in-out"
    menuBtn.style.animation = "buttonAnimationDown 2s ease-in-out"
    setTimeout(() => {
      mainMenu.style.removeProperty('animation')
      mainMenu.style.bottom = "0"
      menuBtn.style.removeProperty('animation')
      menuBtn.style.backgroundColor = "black"
      menuBtn.style.rotate = "0deg"
      menuBtn.style.bottom = "-5rem"
    }, 1900)
  }
})