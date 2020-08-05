<template>
  <div class="home">
   <WelcomeSection />
   <NewArrivalsSection />
   <JournalSection />
   <SignUpNews />
  </div>
</template>

<script>
import WelcomeSection from '~/components/WelcomeSection'
import NewArrivalsSection from '~/components/NewArrivalsSection'
import JournalSection from '~/components/JournalSection'
import SignUpNews from '~/components/SignUpNews'
import { TimelineMax } from 'gsap'

  export default {
    name: 'home',
    transition: {
      name:'welcome',
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
    },
    components: {
      NewArrivalsSection,
      JournalSection,
      SignUpNews,
      WelcomeSection
    },
    methods: {},
    computed: {},
    mounted() {}
  }
</script>

<style>

</style>