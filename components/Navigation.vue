<template>
	 <v-flex>

	 	<v-toolbar fixed>

			<v-layout	class="d-flex justify-center align-center pt-4 ml-12 font-weight-light"	title	color="grey lighten-4">
				<router-link to="/men"><v-text	class="pl-8 pr-8"	flat>men</v-text></router-link>
				<router-link to="/women"><v-text	class="pl-8 pr-8"	flat>women</v-text></router-link>
				<router-link to="/"><v-text	class="pl-8 pr-8"><img src="~/assets/Nuxt-js.png" alt="Nuxt.js" style="width: 50px;	margin-top: -10px;"></v-text></router-link>
				<router-link to="/sale"><v-text	class="pl-8 pr-8"	flat>sale</v-text></router-link>
				<router-link to="/discover_more"><v-text	class="pl-8 pr-8"	flat>discover more</v-text></router-link>
			</v-layout>
		
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
			</v-toolbar-item>
			
		</v-toolbar>

	</v-flex>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	export default {
	  name: 'navigation',
	  data: () => ({

	  }),
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