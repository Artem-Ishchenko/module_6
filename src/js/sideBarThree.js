let body = document.body
let btnOpenTwo = document.querySelectorAll('.button-global-message')
let btnCloseTwo = document.querySelector('.right__button-close-part-2')
let shadowSideBarTwo = document.querySelector('.side-bar-right__shadow-2')
let sidebarRightPartTwo = document.querySelector('.side-bar-right__window')
let fullSideRightTwo = document.querySelector('.side-bar-right-full-part-2')

btnOpenTwo.forEach(function (item) {
  item.addEventListener('click', () => {
    fullSideRightTwo.style.display = 'flex'
    body.classList.toggle('block-right')
    window.scrollTo(pageYOffset, 0)
  })
})
btnCloseTwo.addEventListener('click', () => {
  fullSideRightTwo.style.display = 'none'
  body.classList.toggle('block-right')
})

shadowSideBarTwo.addEventListener('click', (e) => {
  if (e.target) {
    fullSideRightTwo.style.display = 'none'
    body.classList.toggle('block-right')
  }
})
