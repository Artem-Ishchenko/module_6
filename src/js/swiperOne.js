import { swiperBuild } from './swiperAll.js'
import { buttonAllSlides } from './buttonAll.js'

let sliderList = document.querySelectorAll(
  '.block-repair-slider__slide--swiper-one'
)
let point = sliderList.length

//сколько элементов нужно расзмещать при разрешениях
let point768 = 6
let point1120 = 8
let point1984 = 10
//
let btnAll = document.querySelector('.block-repair__button-next--swiper-one')
let btnDecor = document.querySelector('.block-repair__arrow--swiper-one')
let btnText = document.querySelectorAll('.block-repair__text--swiper-one')

swiperBuild(
  '.block-repair-slider--swiper-one',
  '.swiper-pagination--swiper-one'
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
