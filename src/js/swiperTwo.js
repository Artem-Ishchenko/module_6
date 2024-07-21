import { swiperBuild } from './swiperAll.js'
import { buttonAllSlides } from './buttonAll.js'

let sliderList = document.querySelectorAll(
  '.block-repair-slider__slide--swiper-two'
)
let point = sliderList.length
//сколько элементов нужно расзмещать при разрешениях
let point768 = 3
let point1120 = 4
let point1984 = 5
//
let btnAll = document.querySelector('.block-repair__button-next--swiper-two')
let btnDecor = document.querySelector('.block-repair__arrow--swiper-two')
let btnText = document.querySelectorAll('.block-repair__text--swiper-two')

swiperBuild(
  '.block-repair-slider--swiper-two',
  '.swiper-pagination--swiper-two'
)

buttonAllSlides(
  sliderList,
  btnAll,
  btnDecor,
  btnText,
  point,
  point768,
  point1120,
  point1984
)
