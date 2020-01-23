import classNames from '../classNames'
import { BEMblock } from '../helpers'
import { IS_ACTIVE } from '../constants'

const classes = classNames.heroVideo

export default () => {
  function onClick(e) {
    const btn = e.target.closest(`.${classes.btn}`)
    if (!btn) return

    e.preventDefault()
    const video = document.querySelector(`.${classes.video}`)
    const { src } = video.dataset
    video.src = src

    BEMblock(video, 'hero__video').addMod(IS_ACTIVE)
  }

  document.addEventListener('click', onClick)
}
