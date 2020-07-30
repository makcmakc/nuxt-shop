<template>
  <ProductCarousel :images="images">
    Sidebar content here
  </ProductCarousel>
</template>
<script>
export default {
  components: {
    ProductCarousel,
  },
  data() {
    return {
      images: [
        'http://lorempixel.com/1000/1000/business/1/',
        'http://lorempixel.com/1000/1000/business/2/',
        'http://lorempixel.com/1000/1000/business/3/',
      ]
    }
  },
}
</script>


<!-- Name	Type	Default	Required	Description
images	Array	[]	true	Array of image urls that will be used in slider
body-class-on-zoom	String	zoom	false	Class that will be added to the body while Zoom mode is active. Very useful to hide header/footer in Zoom mode. -->