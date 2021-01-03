import One from './demo-1'
import Two from './demo-2'

const demos = [One, Two]
const demo = document.body.getAttribute('data-id')

new demos[demo]()
