<template>
	<v-footer color="white" padless>
    <v-row align="center" justify="center">
      <v-col cols="4" sm="8" md="4">
    		<v-card flat tile class="text-center align--center"	>
		      <v-card-text>
		        <v-btn
		          v-for="icon in icons"
		          :key="icon"
		          class="mx-4 black--text"
		          icon
		        >
		          <v-icon size="20px" color="grey darken-3">{{ icon }}</v-icon>
		        </v-btn>
		        <v-card-subtitle>#myShop</v-card-subtitle>
		      </v-card-text>
		      <v-divider></v-divider>
		        <v-card-subtitle	class="pl-8 pr-8">
		        	<img src="~/assets/Nuxt-js.png" alt="Nuxt.js" class="pt-2" style="width: 35px; filter: grayscale(100%)">
		        </v-card-subtitle>		      
		      <v-card-text class="text-caption" color="grey lighten-5">
		        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices.
		      </v-card-text>
		    </v-card>
		  </v-col>
		</v-row>
  </v-footer> 
</template>


<script>
export default {
	name: 'app-footer',
	data: () => ({
		icons: [
			'mdi-instagram',
			'mdi-vk',
			'mdi-pinterest'
		]
	})
}
</script>

