<template>
<!-- 	<v-container class="mt-12 pt-12"> -->
  <div class="carousel-wrapper mt-12 mb-8">
  	<div class="ml-12 mb-4">
	  	<div class="title">New Arrivals</div>
	  	<p>Check out our latest arrivals for the upcoming season</p>
	  	<a href="#">See full collection here</a>
  	</div>


		<VueSlickCarousel v-bind="slickOptions">
		  <v-card
		    class="mx-auto pa-1"
		    width="330"
		    v-for="i in 10"
		    :key="i"
		    flat
		  >
			 <v-img
	      class="white--text align-end"
	      height="380px"
	      src="https://cdn.shopify.com/s/files/1/0318/4253/3515/products/123590GerryTwiggyPantLightTaupe_1440x.jpg?v=1594044173"
		    >
		    	<v-card-title>New</v-card-title>
		    </v-img>
		    <v-card-title class="text-subtitle-1">Gerry Twiggy Pant Sustainable</v-card-title>
		    <v-btn-toggle 
		    	v-model="toggle_exclusive"
		    	active-class="current-color"
		    	borderless dence
		    	group elevation
		    	class="ml-2 mt-n2"
		    	>
          <v-btn icon color="" ><v-icon size="15px">mdi-brightness-1</v-icon></v-btn>
          <v-btn icon color="red" class="ml-n1"><v-icon size="15px">mdi-brightness-1</v-icon></v-btn>
          <v-btn icon color="orange darken-2" class="ml-n1"><v-icon size="15px">mdi-brightness-1</v-icon></v-btn>
		    </v-btn-toggle>

		    <v-card-text class="mt-n6 ml-n3">
					<v-card-subtitle class="">2000 ₽</v-card-subtitle>
		    </v-card-text>
		  </v-card>
    </VueSlickCarousel>

  </div>
<!-- </v-container> -->
</template>

<script>
export default {
  data() {
    return {
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
      }
    }
  }
}
</script>

<style>
.current-color {
	border-radius: 50%;
}
</style>
