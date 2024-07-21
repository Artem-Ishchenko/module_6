//реализует кнопку показать еще
export function buttonAllSlides(
  sliderList,
  btnAll,
  btnDecor,
  btnText,
  point,
  point768,
  point1120,
  point1984
) {
  let changFlex = function (point) {
    for (let i = 0; i < sliderList.length; i++) {
      sliderList[i].style.display = 'flex'
    }
    if (point !== sliderList.length) {
      for (let i = 0; point + i < sliderList.length; i++) {
        sliderList[point + i].style.display = 'none'
        if (btnAll.classList.contains('activeAll')) {
          sliderList[point + i].style.display = 'flex'
        }
      }
    }
  }

  let widthWindow = function () {
    if (window.innerWidth >= 768 && window.innerWidth < 1120) {
      point = point768
      changFlex(point)
    } else if (window.innerWidth >= 1120 && window.innerWidth < 1712) {
      point = point1120
      changFlex(point)
    } else if (window.innerWidth >= 1712 && window.innerWidth < 1984) {
      point = point1984
      changFlex(point)
    } else {
      point = sliderList.length
      changFlex(point)
    }
    return point
  }

  widthWindow()

  btnAll.addEventListener('click', () => {
    if (btnAll.classList.contains('activeAll')) {
      btnAll.classList.remove('activeAll')
      changFlex(point)
      btnDecor.style.transform = 'rotateX(0deg)'
      for (let item of btnText) {
        if (item.classList.contains('disable')) {
          item.classList.remove('disable')
        } else {
          item.classList.add('disable')
        }
      }
    } else {
      btnAll.classList.add('activeAll')
      changFlex(point)
      btnDecor.style.transform = 'rotateX(180deg)'
      for (let item of btnText) {
        if (item.classList.contains('disable')) {
          item.classList.remove('disable')
        } else {
          item.classList.add('disable')
        }
      }
    }
  })
}
