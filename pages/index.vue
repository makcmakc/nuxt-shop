<template>
<v-container fluid>
<v-layout
    column
    justify-center
    align-center
  > 
      <v-col cols="6">
        <div class="img">
        <v-img 
          src="https://i.pinimg.com/originals/a9/94/7a/a9947a21d05093a3e83df149a8c9c247.jpg"
          max-height="400px"
          width="400px"
        ></v-img>
        </div>
      </v-col>

    <div class="data">
      <div class="tag">
        <span></span>
      </div>
      <div class="arrow-left">
        <v-icon slot="append" color="#444">mdi-chevron-left</v-icon>
      </div>
      <div class="arrow-right">
        <v-icon slot="append" color="#444">mdi-chevron-right</v-icon>
      </div>
      <div class="tag-line">
        <span>Discover product</span>
      </div>
    </div>

 
  </v-layout>

</v-container>
</template>

<script>
import ArticlePreview from '~/components/article/Preview.vue'
import SignUpNews from '~/components/SignUpNews.vue'

export default {
  components: {
    ArticlePreview,
    SignUpNews
  }
}
</script>


<style lang="scss">
a {
  text-decoration: none;
  color: #232323 !important;
}


.s-one {
  position: absolute;
  width: 1px;
  height: 100vh;
  background: rgba(0, 0, 0, .2);
  left: 25%;
}
.s-two {
  position: absolute;
  width: 1px;
  height: 100vh;
  background: rgba(0, 0, 0, .2);
  left: 50%;
}
.s-three {
  position: absolute;
  width: 1px;
  height: 100vh;
  background: rgba(0, 0, 0, .2);
  left: 75%;
}    

.data {
  .arrow-left {
    position: fixed;
    bottom: 66px;
    left: 132px;
    padding: 10px 30px;
  }
  .arrow-right {
    position: fixed;
    bottom: 66px;
    left: 222px;
    padding: 10px 30px;
  }  
  .img {
    position: fixed;
    z-index: 0;

  }
  .e-shop {
    position: fixed;
    left: 1020px;
    top: 180px;
    transform: rotate(90deg);
    padding: 10px 30px;
  }
  .media {
    position: absolute;
    right: 40px;
    bottom: 7%;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50px;
  }


  .img {
      opacity: 0;
      animation: appear-text 1s linear forwards;
      animation-delay: 1.4s;
      position: fixed;
      z-index: 0;
      top: 10%;
      left: 38%;
      &:after {
        content: "";
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: #b68c70;
        position: absolute;
        animation: rev-img 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        animation-delay: 1s;     
      }
      img {
        width: 48%;
        height: 300px;
      }
  }

  .title {
    position: absolute;
    font-size: 62px;
    top: 276px;
    left: 862px;
    span {
      opacity: 0;
      animation: appear-text 0.0001s linear forwards;
      animation-delay: 2s;
    }
    &:after {
      content: "";
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #000;
      position: absolute;
      animation: rev-block 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
      animation-delay: 1.4s;
    }
  }

  .tag-line {
    position: fixed;
    top: 410px;
    left: 692px;
    padding: 10px 30px;
    color: #333;
    span {
      opacity: 0;
      animation: appear-text 0.0001s linear forwards;
      animation-delay: 2.5s;     
    }
    &:after {
      content: "";
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #000;
      position: absolute;
      animation: rev-block 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
      animation-delay: 1.8s;      
    }
  }  
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