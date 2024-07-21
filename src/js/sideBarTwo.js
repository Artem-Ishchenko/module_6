let body = document.body
let btnOpenOne = document.querySelectorAll('.button-global-call')
let btnCloseOne = document.querySelector('.right__button-close-part-1')
let shadowSideBarOne = document.querySelector('.side-bar-right__shadow')
let sidebarRightPartOne = document.querySelector('.side-bar-right__window')
let fullSideRightOne = document.querySelector('.side-bar-right-full-part-1')

btnOpenOne.forEach(function (item) {
  item.addEventListener('click', () => {
    fullSideRightOne.style.display = 'flex'
    body.classList.toggle('block-right')
    window.scrollTo(pageYOffset, 0)
  })
})

btnCloseOne.addEventListener('click', () => {
  fullSideRightOne.style.display = 'none'
  body.classList.toggle('block-right')
})

shadowSideBarOne.addEventListener('click', (e) => {
  if (e.target) {
    fullSideRightOne.style.display = 'none'
    body.classList.toggle('block-right')
  }
})
