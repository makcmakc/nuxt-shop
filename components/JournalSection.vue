<template>
	<v-layout class="journal">
		<v-row align="center" justify="center" >

			<v-col cols="6">
				<v-card>
					<v-img 
						src="https://cdn.shopify.com/s/files/1/0318/4253/3515/files/134500_Wylie_Knit_-_134210_Naomi_Jewel_Jeans_Regular_1_768x.jpg?v=1594045124"
						class="white--text align-end"
	          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
	          rounded="false"
						>
						<p class="text-center font-weight-light">Denim</p>
						<v-card-subtitle align="center" class="mb-12 mt-n4 font-weight-light white--text">Get lost in world of blue denim and beautiful details</v-card-subtitle>
					</v-img>
				</v-card>
			</v-col>

			<v-col cols="6">
				<v-card>
				<v-img
					src="https://cdn.shopify.com/s/files/1/0318/4253/3515/files/131731_Mattie_Sustainable_Shirt_White_768x.jpg?v=1594045207"
					class="white--text align-end"
					gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
					>
					<p class="font-weight-light text-center white--text">Basic Shirts</p>
					<v-card-subtitle align="center" class="mb-12 mt-n4 font-weight-light white--text">Luxurious feminnine wardrobe staples</v-card-subtitle>
				</v-img>
				</v-card>
			</v-col>

			<v-col cols="8" class="mt-12">
				<v-card class="mt-12">
					<v-img src="https://cdn.shopify.com/s/files/1/0318/4253/3515/articles/131170-Sansa-Cashmere-Knit---132620-Riva-Chester-Jacket---123590-Gerry-Twiggy-Pant_1440x.jpg?v=1588160509">
					</v-img>

				</v-card>
				<div align="center" class="preview mt-12">
					<div class="text-subtitle-1 font-weight-light">Как одеться летом в городе - простые и элегантные образы</div>
					<v-col cols="5">
					<div class="text-subtitle-2 font-weight-light font-italic mt-2">Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Переулка повстречался рукопись, инициал рекламных семантика, рот деревни!</div>
					</v-col>
				</div>
			</v-col>

			<v-col cols="12">
				<v-row dence>
			  <v-card
			  	v-for="(article, index) in articles"
			  	:key="index"
			    class="mx-auto"
			    max-width="360"
			    flat
			  >
			    <v-img
			      class="white--text align-end"
			      height="380px"
			      :src="article.img"
			    >
			    </v-img>
			     <v-card-subtitle class="mb-n6">{{ article.date }}</v-card-subtitle>
			     <v-card-title class="text-subtitle-1 mb-2">{{ article.title }}</v-card-title>
			     <v-card-subtitle class="text-subtitle-2">{{ article.subtitle }}</v-card-subtitle>
			  </v-card> 
			  </v-row>		  
			</v-col>

		</v-row>
	</v-layout>
</template>

<script>
	export default {
		name: 'journal',
		data() {
			return {
				articles: [
					{ 
						img: 'https://cdn.shopify.com/s/files/1/0318/4253/3515/articles/117440-Troy-Tee-SS---132450-Bradford-Worked-Jeans_2000x.jpg?v=1585049433',
						title: 'Lorem ipsum dolor sit amet.',
						subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere harum ab incidunt! Expedita facere optio praesentium.',
						url: '',
						date: 'Apr 03, 2020'
					},
					{
						img: 'https://cdn.shopify.com/s/files/1/0318/4253/3515/articles/117440-Troy-Tee-SS---132450-Bradford-Worked-Jeans_2000x.jpg?v=1585049433',
						title: 'Lorem ipsum dolor sit amet.',
						subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro deserunt commodi accusantium? Ad fuga, enim tempora.',
						url: '',
						date: 'Apr 03, 2020'
					},
					{
						img: 'https://cdn.shopify.com/s/files/1/0318/4253/3515/articles/117440-Troy-Tee-SS---132450-Bradford-Worked-Jeans_2000x.jpg?v=1585049433',
						title: 'Lorem ipsum dolor sit amet.',
						subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non tempore, qui, consectetur minima ipsum nostrum minus?',
						url: '',
						date: 'Apr 03, 2020'
					},
					{
						img: 'https://cdn.shopify.com/s/files/1/0318/4253/3515/articles/117440-Troy-Tee-SS---132450-Bradford-Worked-Jeans_2000x.jpg?v=1585049433',
						title: 'Lorem ipsum dolor sit amet.',
						subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis vel quia rerum fugiat magni velit similique.',
						url: '',
						date: 'Apr 03, 2020'
					}
				]
			}
		},
		methods: {},
		computed: {},
		mounted() {}
	}
</script>

<style>

</style>