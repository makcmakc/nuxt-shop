<template>
  <v-container fluid>
    <v-row align="center" justify="center">

      <v-col cols="6" class="block-image">
        <v-carousel 
          :show-arrows="false"
          height="100vh"
          >
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="require(`~/assets/images/${item.src}`)"
            @click="scaleImage(item.src)"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>        
      </v-col>

      <v-col cols="6" class="block-details">
        <v-layout>
          <v-col class="mt-12 ml-6">
            <div class="name mt-2">
              {{ name }}
            </div>
            <div class="description mt-8">
              <v-subheader>{{ description }}</v-subheader>
            </div>
            <div class="mt-6 text-subtitle-2 model-details">
              <p> {{ modelDetails }} </p>
              <span class="size-help">Size Help?</span>
            </div>
            <div class="options"></div>

            <div class="add-to-cart">
              <v-btn dark depressed large class="text-subtitle-1">Add To Bag</v-btn>
            </div>
          </v-col>
        </v-layout>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'product',
    layout: 'empty',
    // props: {
    //   product: {
    //     images: Array,
    //     name: String,
    //     description: String,
    //     options: Array,
    //     sizes: Array,
    //     price: Number,
    //     requred: true,
    //     default: () => {}
    //   }
    // },
    data: () => ({
      name: 'Kay Tee',
      description: 'Not just your average pair of grey wash jeans. Cut in regular fit and mid-rise and crafted with plenty of stretch to maintain its figure-hugging fit throughout the day. Style yours with a leather jacket for an edgy look or tap into this season’s hot blazer and jeans trend.',
      modelDetails: 'Our model Marion is 178 cm tall and wears a size 27',
      options: [],
      sizes: [],
      price: '',
      items: [
          {
            src: 'Kay_Tee_1_Gold_1440x.jpg',
          },
          {
            src: 'Kay_Tee_2_Gold_1440x.webp',
          },
          {
            src: 'Kay_Tee_Gold_3_1440x.webp'
          },
        ]
    }),
    methods: {
      scaleImage(img) {
        console.log(img)
      }
    } 
  }
</script>

<style lang="scss">
.block-image {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  background-color: #ededed;
  overflow: hidden;
  cursor: crosshair;
  padding: 0;
  margin: 0;
}

.block-image .main-image {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: no-repeat 50% 50%;
  background-size: cover;
  cursor: crosshair;
  transition: opacity 0.4s ease-out;  
}

.block-image-carousel {

}

.v-carousel__controls {
  right: 0 !important;
  width: 50px;
  top: 0;
  bottom: 0;
  height: 100%;
  background: transparent;

  .v-btn__content i{
    font-size: 14px !important;
  }

  .v-icon {
    &::after {
      width: 80%;
      height: 80%;
      transform: scale(.9);
    }
  }
}

.block-details {
  right: 0;
  top: 0;
  position: absolute;
  height: 100%;
  background: #f2f2f2;
  overflow-y: auto;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
}

</style>
