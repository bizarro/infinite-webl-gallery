import One from './demo-1'
import Two from './demo-2'

const demos = [One, Two]
const demo = document.body.getAttribute('data-id')

new demos[demo]()

document.documentElement.classList.remove('no-js')
document.documentElement.classList.add('js')

const images = document.querySelectorAll('img:not([src*="https://tympanus.net/codrops/wp-content/banners/"])')
let imagesIndex = 0

Array.from(images).forEach(element => {
  const image = new Image()

  image.src = element.src
  image.onload = _ => {
    imagesIndex += 1

    if (imagesIndex === images.length) {
      document.documentElement.classList.remove('loading')
      document.documentElement.classList.add('loaded')
    }
  }
})
