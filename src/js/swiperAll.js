// создает слайдер
export function swiperBuild(swiperBlock, elName) {
  if (window.innerWidth <= 768) {
    return new Swiper(swiperBlock, {
      pagination: {
        el: elName,
        clickable: true
      },
      slidesPerView: 'auto',
      dynamicMainBullets: 10
    })
  }
}
