<template>
	 <v-flex>
	 	<v-toolbar fixed>
			<v-layout	class="d-flex justify-center align-center pt-4 font-weight-light"	title	color="grey lighten-4">
				<nuxt-link to="/men">
					<p class="pl-8 pr-8" flat>men</p>
				</nuxt-link>
				<nuxt-link to="/women">
					<p class="pl-8 pr-8" flat>women</p>
				</nuxt-link>
				<nuxt-link to="/">
					<p class="pl-8 pr-8"><img src="~/assets/Nuxt-js.png" alt="Nuxt.js" style="width: 50px;	margin-top: 5px;"></p>
				</nuxt-link>
				<nuxt-link to="/sale">
					<p class="pl-8 pr-8"	flat>sale</p>
				</nuxt-link>
				<nuxt-link to="/discover_more">
					<p class="pl-8 pr-8"	flat>discover more</p>
				</nuxt-link>
			</v-layout>
<!-- 		
			<v-toolbar-item>
				<div class="shop-cart">
	      <v-tab>
	        <v-badge
	          color="#00c58e"
	          content="6"
	        >
	          <router-link to="/cart"><v-icon>mdi-cart</v-icon></router-link>
	        </v-badge>
	      </v-tab>					
					
				</div>
			</v-toolbar-item> -->
		</v-toolbar>
	</v-flex>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	export default {
	  name: 'navigation',
		components: {
			Logo

		},
		methods: {},
		computed: {},
		mounted() {}
	}
</script>

<style>
a {
  text-decoration: none;
  color: #232323 !important;
}
</style>