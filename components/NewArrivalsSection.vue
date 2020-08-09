<template>
	<v-container fluid>
  <div class="carousel-wrapper mt-12 mb-8 ml-1 mr-1">
  	<div class="ml-12 mb-4">
	  	<div class="title">New Arrivals</div>
	  	<p>Check out our latest arrivals for the upcoming season</p>
	  	<a href="#">See full collection here</a>
  	</div>


		<VueSlickCarousel v-bind="slickOptions">
		  <v-card
		    class="mx-auto pa-1"
		    width="330"
		    v-for="arrival in arrivals"
		    :key="arrival.id"
		    flat
		  >
			 <v-img
	      class="white--text align-end"
	      height="380px"
	      :src="require(`~/assets/images/${arrival.img}`)"
	      v-on:click.prevent.stop="toProduct(arrival.id)"

		    >
		    	<v-card-title>New</v-card-title>
		    </v-img>
		    <v-card-title class="text-subtitle-1">{{ arrival.name }}</v-card-title>
		    <v-btn-toggle 
		    	v-model="toggle_exclusive"
		    	active-class="current-color"
		    	borderless dence
		    	group elevation
		    	class="ml-2 mt-n2"
		    	>
          <v-btn
          	icon
          	v-for="(option, index) in arrival.options"
          	:key="index"
          	:color="option"
          	>
          	<v-icon size="15px">mdi-brightness-1</v-icon></v-btn>
		    </v-btn-toggle>

		    <v-card-text class="mt-n6 ml-n3">
					<v-card-subtitle class="">2000 ₽</v-card-subtitle>
		    </v-card-text>
		  </v-card>
    </VueSlickCarousel>

  </div>
</v-container>
</template>

<script>
export default {
  data: () => ({
  	toggle_exclusive: 1,
    slickOptions: {
		  dots: false,
		  infinite: false,
		  speed: 500,
		  slidesToShow: 4.2,
		  slidesToScroll: 4,
		  initialSlide: 0,
		  arrows: true,
		  responsive: [
		    {
		      breakpoint: 1280,
		      settings: {
		        slidesToShow: 8,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: false
		      }
		    },			    
		    {
		      breakpoint: 100,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        initialSlide: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
    },
    arrivals: [
    	{ 
    		id: 1,
    		img: 'OscarO-neckKnit_1440x.jpg',
    		name: 'Oscar Neck-Knit',
    		price: 1500,
    		options: ['#1a1a1c']
    	},
    	{ 
    		id: 2,
    		img: 'Tina_Jersey_Shirt_1440x.jpg',
    		name: 'Tina Jersey Shirt',
    		price: 1500,
    		options: ['black', '#d9dce3']
    	},
    	{ 
    		id: 3,
    		img: 'Kaffe-ASTRID-ROLL-NECK-Jumper-rain-forest.jpg',
    		name: 'Astrid-Roll Neck Jumper',
    		price: 2000,
    		options: ['#115048']
    	},
    	{ 
    		id: 4,
    		img: 'Mattie_Check_Shirt_1440x.jpg',
    		name: 'Mattie Check Shirt',
    		price: 1200,
    		options: ['#bac5d7']
    	},
    	{ 
    		id: 5,
    		img: 'Tina_Jersey_Shirt_1440x.jpg',
    		name: 'Tina Jersey Shirt',
    		price: 1500,
    		options: ['black']
    	},
    	{ 
    		id: 6,
    		img: 'Tina_Jersey_Shirt_1440x.jpg',
    		name: 'Tina Jersey Shirt',
    		price: 1500,
    		options: ['black']
    	}	      	      	      	      	
    ]
  }),
  methods: {
  	toProduct(id) {
  		this.$router.push({ name: 'products', params: {id} })
  	}
  }
}
// 		    :to="`/products/${arrival.id}`"
</script>

<style>
.current-color {
	border-radius: 50%;
}
</style>
