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
          <v-col class="mt-12 ml-4">
            <div class="name mt-2 ml-4">
              <p class="text-h6 font-weight-bold">{{ name }}</p>
            </div>
            <div class="description mt-8">
              <v-subheader>{{ description }}</v-subheader>
            </div>
            <div class="mt-6 text-subtitle-2 model-details">
              <v-subheader>
                <v-text>{{ modelDetails }}</v-text>
                <v-text class="ml-2">-</v-text>
                <v-text  @click="dialog = true" class="ml-2 text-decoration-underline size-helper">Size Helper</v-text>
              </v-subheader>
            </div>

            <v-col cols="4" class="options">
              <v-text class="mt-4">Color </v-text>
              <v-btn-toggle 
                v-model="currentColor"
                borderless dence
                group elevation
                class="ml-2 mt-3"
                >
                <v-btn
                  icon
                  v-for="(option, index) in options"
                  :key="index"
                  :color="option"
                  >
                  <v-icon size="14px">mdi-brightness-1</v-icon></v-btn>
              </v-btn-toggle>
            </v-col>

            <div class="sizes ml-4">
              <v-text class="mt-4">Size</v-text>
              <v-radio-group v-model="row" row >
                <v-radio value="XS" on-icon="XS" off-icon="XS"></v-radio>
                <v-radio value="S" on-icon="S" off-icon="S"></v-radio>
                <v-radio value="M" on-icon="M" off-icon="M"></v-radio>
                <v-radio value="L" on-icon="L" off-icon="L"></v-radio>
                <v-radio value="XL" on-icon="XL" off-icon="XL"></v-radio>
              </v-radio-group>
            </div>

            <div class="price ml-4 mt-4"> ₽ {{ price }}</div>

            <div class="add-to-cart ml-4 mt-10">
              <v-btn dark depressed large class="text-subtitle-1">Add To Bag</v-btn>
            </div>
          </v-col>
        </v-layout>
      </v-col>

    </v-row>

    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <v-card>
      <v-subheader>Size Guide</v-subheader>
      <v-divider></v-divider>
        <v-data-table
          :pagination="false"
          :headers="headers"
          :items="desserts"
          class="elevation-1 pa-4"
        >

      </v-data-table>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
  export default {
    name: 'product',
    layout: 'empty',
    data: () => ({
      name: 'Kay Tee',
      description: 'Not just your average pair of grey wash jeans. Cut in regular fit and mid-rise and crafted with plenty of stretch to maintain its figure-hugging fit throughout the day. Style yours with a leather jacket for an edgy look or tap into this season’s hot blazer and jeans trend.',
      modelDetails: 'Our model Marion is 178 cm tall and wears a size 27',
      options: ['black', 'green', 'cyan'],
      sizes: [],
      currentColor: null,
      price: '700',
      dialog: null,
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
        ],
       headers: [
          {
            text: 'Size',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'XS', value: 'xs' },
          { text: 'S', value: 's' },
          { text: 'M', value: 'm' },
          { text: 'L', value: 'l' },
          { text: 'XL', value: 'xl' },
        ],
        desserts: [
          {
            name: 'Bust',
            xs: 82,
            s: 88,
            m: 94,
            l: 100,
            xl: 106,
          },
          {
            name: 'Waist',
            xs: 64,
            s: 70,
            m: 76,
            l: 82,
            xl: 88,
          },
          {
            name: 'Hip',
            xs: 90,
            s: 96,
            m: 102,
            l: 108,
            xl: 114,
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

.v-input--selection-controls__input {
  font-size: 10px;
  width: 22px;
}

.v-icon.notranslate.material-icons.theme--light {
  font-size: 16px;
}

.v-dialog .v-card .v-data-footer {
  display: none;
}

.size-helper {
  cursor: pointer;
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
