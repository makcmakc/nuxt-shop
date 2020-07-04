<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">
          To Form Order Test
        </v-card-title>
        <v-card-text>

        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/shipping"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>


    <v-flex row mt-8>
      <sign-up-news />
    </v-flex>
    

  </v-layout>
</template>

<script>
import ArticlePreview from '~/components/article/Preview.vue'
import SignUpNews from '~/components/SignUpNews.vue'

export default {
  components: {
    ArticlePreview,
    SignUpNews
  }
}
</script>
