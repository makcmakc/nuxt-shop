<template>
  <v-app>
    <navigation></navigation>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Navigation from '~/components/Navigation.vue'  

export default {
  components: {
    Navigation
  }  
}
</script>
