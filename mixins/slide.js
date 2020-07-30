import { TimelineMax } from 'gsap'

export default {
  transition: {
    name:'slide',
    mode: 'out-in',
    css: false,
    enter: function(el, done) {
      const tl = new TimelineMax({ onComplete: done })
      tl.fromTo(el, .3, { y: -100, opacity: 0 }, { y: 0, opacity: 1 })
    },
    leave: function(el, done) {
      const tl = new TimelineMax({ onComplete: done })
      tl.fromTo(el, .3, { y: 0, opacity: 1 }, { y: 100, opacity: 0 })        
    }
  }
}
