<template>
	<v-container fluid>
		<section class="phone-section">
      <v-row no-gutters class="ml-12" >
        <v-col sm="5" md="6" class="mt-12 ml-12">			
					<PhoneModel />
				</v-col>
          <v-col
            class="ml-10 pt-4 pl-2"
            sm="4"
            offset-sm="2"
            offset-md="0"
          	>
            <div class="description mt-12 pt-4">
              <p class="sub-heading text-h5">
              	Подписывайся на наш Telegram Bot, чтобы быть в курсе всех новинок, <br>
              	а также получать информацию о скидках.
              </p>
            </div>
            <v-btn dark depressed large class="mt-4">
            	Подписаться
            	<v-icon class="ml-2">mdi-telegram</v-icon>
            </v-btn>
       		</v-col>
				</div>
			</v-row>
		</section>
	</v-container>
</template>

<script>
	import PhoneModel from './PhoneModel.vue'
	export default {
		name: 'sign-up-news',
    components: {
    	PhoneModel
    }
	}
</script>

<style>
.phone-section {
  height: 70vh;
  position: relative;
}
</style>
