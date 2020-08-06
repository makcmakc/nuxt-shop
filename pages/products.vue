<template>
  <v-container fluid>
    <v-row align="center" justify="center">

      <v-col cols="6" class="block-image">
        <a href="#" class="main-image responsive-image"
           :style="mainImageStyle"
        ></a>        

        <div id="product-slider" class="block-image-carousel swipe">
          <div class="swipe-wrap">
            <div v-for="(image, index) in images" :key="index">
              <a
                 :style="backgroundImg(image)"
                 :class="{'selected' : index === next, 'background-loading': itemsBgLoading}"
                 href="#" class="swipe-thumbnail"
              ></a>
            </div>
          </div>
        </div> 
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
    props: {
      product: {
        images: Array,
        name: String,
        description: String,
        options: Array,
        sizes: Array,
        price: Number,
        requred: true,
        default: () => {}
      }
    },
    data: () => ({
      images: [
        'https://cdn.shopify.com/s/files/1/0318/4253/3515/products/134230AvaJeansAnkleGrey_1440x.jpg?v=1594021496'
        ],
      name: 'Ava Jeans',
      description: 'Not just your average pair of grey wash jeans. Cut in regular fit and mid-rise and crafted with plenty of stretch to maintain its figure-hugging fit throughout the day. Style yours with a leather jacket for an edgy look or tap into this season’s hot blazer and jeans trend.',
      modelDetails: 'Our model Marion is 178 cm tall and wears a size 27',
      options: [],
      sizes: [],
      price: ''

    }),
    methods: {
      backgroundImg(url) {
        return {
          backgroundImage: `url('${url}')`
        }
      }
    },
    computed: {
      mainImageStyle() {
        return this.backgroundImg('https://cdn.shopify.com/s/files/1/0318/4253/3515/products/134230AvaJeansAnkleGrey_468x.jpg?v=1594021496')
      }
    },
    mounted() {}
  }
</script>

<style>
.block-image {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  transform: translate3d(0px, 0px, 0px);
  background-color: #F3F3F3;
  overflow: hidden;
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


