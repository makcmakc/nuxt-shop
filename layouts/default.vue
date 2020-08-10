<template>
  <v-app>
    <div class="navigation">
    <Navigation></Navigation>
    </div>
<!--     <WelcomeSection /> -->
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-divider></v-divider>
    <Footer></Footer>   
  </v-app>
</template>

<script>
import Navigation from '~/components/Navigation.vue'  
// import WelcomeSection from '~/components/WelcomeSection.vue'
import Footer from '~/components/Footer.vue'
// // import { TimelineMax } from 'gsap'
export default {
  components: {
    Navigation,
    // WelcomeSection,
    Footer
  },
  // mounted() {
  //   const navigation = document.querySelector('.navigation')
  //   const tl = new TimelineMax()
  //   tl.from(navigation, 1.5, { y: -50, opacity: 0, delay: 2 })
  // }  
}
</script>
