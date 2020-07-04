<template>
  <v-card 
    outlined
    class="mx-auto"
    light
    max-width="340"
    >
    <v-img
      src="https:////cdn.shopify.com/s/files/1/0238/5795/files/Simplistic.jpg?450635"
      class="white--text align-center text-center text-h5 text-lowercase font-weight-bold"
      gradient="to bottom, rgba(0,0,0,0.05), rgba(0,0,0,.3)"
      height="280px"
    >
      <v-card-text>
        <p class="card-text-title">designed for <br> maximum comfort.</p>
      </v-card-text>
      <v-card-text>
        <p class="card-text-subtitle text-xs-right font-weight-light">to be worn inside, outside <br> wherever you like</p>
      </v-card-text>
    </v-img>
  </v-card>
</template>

<script>
	export default {
		name: 'article-preview',
		data() {
			return {}
		},
		methods: {},
		computed: {},
		mounted() {}
	}
</script>

<style>
  .card-text-title {
    line-height: 2.5rem;
    font-size: 30px;
  }
</style>