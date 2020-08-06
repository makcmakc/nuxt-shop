<template>
  <v-layout class="ma-n3"> 
    <div class="welcome-section">
      <div class="welcome-snap__sidebar"></div>   

      <v-container class="ml-12 mt-12 mb-10 welcome-snap__content" fluid>
        <v-row no-gutters class="ml-12 mt-12">
          <v-col class="ml-12 pr-10" cols="5">
              <div class="carousel">
                <v-carousel
                  cycle
                  height="420"
                  width="540"
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
            cols="4"
            sm="5"
            offset-sm="6"
            md="6"
            offset-md="0"
            class="mt-8 ml-10"
          >
              <div class="description ml-12">
                 <router-link to="#">
                  <div class="category grey  text-uppercase white--text mt-5 mb-5">Editorial</div>
                </router-link>
                <div class="main-heading pb-5 font-weight-black">Our Story</div>
                <p class="sub-heading text-subtitle-2">We introduce you to the story of four girls who have carved out their space in the world.</p>
              </div>
              <v-btn dark depressed large class="mt-4 ml-12">
                <router-link class="text-uppercase white--text" to="#">Заценить весь look</router-link>
              </v-btn>                
          </v-col>
        </v-row>
      </v-container>

    </div>

    <div class="welcome-section-default">
      <v-container class="ml-12 mt-10 mb-10 welcome-snap__content" fluid>
        <v-row no-gutters class="ml-12 mt-12">
          <v-col class="ml-12 pr-10" cols="5">
              <div class="carousel">
                <v-carousel
                  cycle
                  height="420"
                  width="540"
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
            cols="4"
            sm="5"
            offset-sm="6"
            md="6"
            offset-md="0"
            class="mt-8 ml-10 description"
          >
              <div class="ml-12">
                 <router-link to="#">
                  <div class="category grey  text-uppercase white--text mt-5 mb-5">Editorial</div>
                </router-link>
                <div class="main-heading pb-5 font-weight-black">Our Story</div>
                <p class="sub-heading text-subtitle-2">We introduce you to the story of four girls who have carved out their space in the world.</p>
              </div>
              <v-btn dark depressed large class="mt-4 ml-12">
                <router-link class="text-uppercase white--text" to="#">Заценить весь look</router-link>
              </v-btn>                
          </v-col>
        </v-row>
      </v-container>

    </div>    
  </v-layout>
</template>

<script>
import { TimelineMax } from 'gsap'
export default {
  name: 'welcome',
  data: () => ({
    items: [
      {
        src: 'https://i.pinimg.com/564x/b9/9c/4b/b99c4bd0ee5f90097448819d9d9b4fc7.jpg',
      },    
      {
        src: 'https://i.pinimg.com/564x/6f/90/d8/6f90d8f93e8c1cd1b242e5819f434436.jpg',
      },
      {
        src: 'https://i.pinimg.com/564x/b9/9c/4b/b99c4bd0ee5f90097448819d9d9b4fc7.jpg',
      },
      {
        src: 'https://i.pinimg.com/564x/6f/90/d8/6f90d8f93e8c1cd1b242e5819f434436.jpg',
      },
    ],    
  }),
  mounted() {
    const leftBar = document.querySelector('.welcome-snap__sidebar')
    // const content = document.querySelector('.welcome-snap__content')
    const carousel = document.querySelector('.carousel')
    const description = document.querySelector('.description')
    const tl = new TimelineMax()
    tl.fromTo(leftBar, 1.8, { width: '100%', zIndex: 1 }, { width: '350px', zIndex: 0 }) 
    // tl.to(content, .3, { scale: 0.95 }) 
    tl.from(carousel, 1, { y: -80, opacity: 0 }) 
    tl.from(description, 1.1, { y: -80, opacity: 0 }) 
  }
}
</script>


<style lang="scss">

.welcome-section-default {
  display: none;
  transform: scale(.95);
}

.welcome-section {
  width: 100%;
  height: 100vh;
  margin-top: -60px;
}
.welcome-snap__sidebar {
  background: #1a1a1a;
  height: 110vh;
  width: 350px;
  position: absolute;
}
.welcome-snap__content {
  margin-top: 100px;
}

.carousel {
  height: 400px;
  width: 560px;
  opacity: 1;
  position: relative;
}

.description {
  opacity: 1;
}
.main-heading {
  font-size: 64px !important;
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