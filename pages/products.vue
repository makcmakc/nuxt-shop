<template>
  <div class="products">
    <ProductPage />
  </div>
</template>

<script>
  import ProductPage from '~/components/ProductPage'
  export default {
    name: 'products',
    layout: 'empty',
    components: {
      ProductPage
    }
  }
</script>

<style>

</style>