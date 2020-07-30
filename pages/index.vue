<template>
  <div class="home">
    <JournalSection />
  </div>
</template>

<script>
import JournalSection from '~/components/JournalSection'

  export default {
    name: 'home',
    data() {
      return {}
    },
    components: {
      JournalSection
    },
    methods: {},
    computed: {},
    mounted() {}
  }
</script>

<style>
/*.slide-enter-active {
  transition: all .3s ease-in-out;
}
.slide-leave-active {
  transition: all .3s ease-in-out;
}
.slide-enter {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateY(0%);
  opacity: 1;
}
.slide-leave {
  transform: translateY(0%);
  opacity: 1;
}
.slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}*/
</style>