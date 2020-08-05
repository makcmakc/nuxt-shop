<template>
  <v-app>
    <Navigation></Navigation>
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
import WelcomeSection from '~/components/WelcomeSection.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navigation,
    WelcomeSection,
    Footer
  }
}
</script>
