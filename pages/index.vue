<template>
<v-layout class=welcome-snap> 
  <div class="welcome-snap__sidebar"></div>    
  <v-container class="ml-12 mt-12">
    <v-row no-gutters class="ml-12">
      <v-col sm="5" md="6" class="mt-12 ml-12">
          <div class="carousel">
            <v-carousel
              height="420"
              width="560"
              interval="4000"
              :show-arrows="false"
              hide-delimiters
              >
              <v-carousel-item
                class="img"
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                transition="slide-x-transition"
              ></v-carousel-item>
            </v-carousel>
          </div>
      </v-col>

      <v-col
        align-self="center"
        class="ml-12 mt-1 pl-2"
        sm="4"
        offset-sm="2"
        offset-md="0"
      >
          <div class="description">
            <div class="category grey  text-uppercase white--text mt-5 mb-5">Editorial</div>
            <div class="main-heading pb-5 font-weight-black">Our Story</div>
            <p class="sub-heading text-subtitle-2">We introduce you to the story of four girls who have carved out their space in the world.</p>
          </div>
          <div class="pt-6">
            <router-link class="text-uppercase" to="#">Заценить весь look</router-link>
          </div>
      </v-col>

    </v-row>

  </v-container>
</v-layout>
</template>

<script>
export default {
  layout: 'empty',
  data: () => ({
    items: [
      {
        src: 'https://i.pinimg.com/564x/b9/9c/4b/b99c4bd0ee5f90097448819d9d9b4fc7.jpg',
      },    
      {
        src: 'https://i.pinimg.com/564x/6f/90/d8/6f90d8f93e8c1cd1b242e5819f434436.jpg',
      },
      {
        src: 'https://i.pinimg.com/564x/6f/90/d8/6f90d8f93e8c1cd1b242e5819f434436.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ],    
  })
}
</script>


<style lang="scss">
a {
  text-decoration: none;
  color: #232323 !important;
}
.welcome-snap__sidebar {
  background: #1a1a1a;
  height: 100vh;
  width: 350px;
  position: absolute;
}
.welcome-snap__content {
  .carousel {
    opacity: 0;
    animation: appear-text 1s linear forwards;
    animation-delay: 1.4s;
    z-index: 0;
    position: absolute;
    height: 400px;
    width: 560px;
    margin-top: 80px;

    &:after {
      content: "";
      width: 400px;
      top: 0;
      left: 0;
      height: 400px;
      width: 560px;
      background: #b68c70;
      position: absolute;
      animation: rev-img 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
      animation-delay: 1s;     
    }
  }
  .main-heading {
    font-size: 68px !important;
    font-family: 'Montserrat'; 
    color: #1a1a1a;
    font-weight: 600 !important;
  }  
  .sub-heading {
    max-width: 324px;
    margin-bottom: 24px;
    color: #1a1a1a;
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;      
  }
  .category {
    font-size: 12px;
    letter-spacing: 0.07em;  
    width: 110px;
    text-align: center;
    padding: 6px 16px;
    font-family: 'Montserrat', sans-serif; 
  }  
}





// .welcome-snap__ {
//   position: absolute;
//   margin-left: 0px;
//   .title {
//     position: absolute;
//     width: 100%;
//     top: 220px;
//     left: 571px;
//     span {
//       font-size: 3rem;
//       opacity: 0;
//       animation: appear-text 0.0001s linear forwards;
//       animation-delay: 2s;
//     }
//     &:after {
//       content: "";
//       top: 0;
//       left: 0;
//       width: 0;
//       height: 100%;
//       background: #000;
//       position: absolute;
//       animation: rev-block 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
//       animation-delay: 1.4s;
//     }
//   }
//   .editorial {
//     position: absolute;
//     top: 120px;
//     left: 580px;
    
//     height: 30px;
//     width: 100px;
//     span {
//       background: #00c58e;
//       padding: 10px 30px;
//     }
//   }  
//   .tag-line {
//     position: absolute;
//     top: 410px;
//     left: 692px;
//     padding: 10px 30px;
//     color: #333;
//     span {
//       opacity: 0;
//       animation: appear-text 0.0001s linear forwards;
//       animation-delay: 2.5s;     
//     }
//     &:after {
//       content: "";
//       top: 0;
//       left: 0;
//       width: 0;
//       height: 100%;
//       background: #000;
//       position: absolute;
//       animation: rev-block 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
//       animation-delay: 1.8s;      
//     }
//   }  
// }


@keyframes rev-block {
  0%{ left: 0%; width: 0% }
  50% { left: 0%; width: 100% }
  100% { left: 100%; width: 0% }
}
@keyframes rev-img {
  0%{ left: 0%; width: 0% }
  50% { left: 0%; width: 46% }
  100% { left: 46%; width: 0% }
}
@keyframes appear-text {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>