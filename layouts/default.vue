<template>
  <v-app>
    <Navigation></Navigation>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-divider></v-divider>
    <Footer></Footer>   
  </v-app>
</template>

<script>
import Navigation from '~/components/Navigation.vue'  
import Footer from '~/components/Footer.vue'  

export default {
  components: {
    Navigation,
    Footer
  }  
}
</script>
