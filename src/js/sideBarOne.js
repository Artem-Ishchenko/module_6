import { sideBarFunc } from './sideBarFunction'

let body = document.body
let mainSideBar = document.querySelector('.main-side-bar')
let shadowSideBar = document.querySelector('.side-bar-shadow')

let sideBar = document.querySelector('.side-bar__left')
let sideBarBtnOpen = document.querySelector('.header-cps__button--menu')
let sideBarBtnClose = document.querySelector(
  '.header-side-bar__button--close-btn'
)
sideBarBtnOpen.addEventListener('click', () => {
  sideBar.style.display = 'flex'
  shadowSideBar.style.display = 'flex'
  mainSideBar.style.display = 'flex'
  body.classList.toggle('lock')
})

sideBarBtnClose.addEventListener('click', () => {
  sideBar.style.display = 'none'
  shadowSideBar.style.display = 'none'
  mainSideBar.style.display = 'none'
  body.classList.toggle('lock')
})

shadowSideBar.addEventListener('click', (e) => {
  if (e.target) {
    sideBar.style.display = 'none'
    shadowSideBar.style.display = 'none'
    mainSideBar.style.display = 'none'
    body.classList.toggle('lock')
  }
})
