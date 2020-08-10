<template>
  <div class="home">
   <div class="spacer"></div>

   <NewArrivalsSection />
<!--    <JournalSection />
   <SignUpNews /> -->
  </div>
</template>

<script>
import WelcomeSection from '~/components/WelcomeSection'
import NewArrivalsSection from '~/components/NewArrivalsSection'
import JournalSection from '~/components/JournalSection'
import SignUpNews from '~/components/SignUpNews'


  export default {
    name: 'home',
    components: {
      NewArrivalsSection,
      JournalSection,
      SignUpNews,
      WelcomeSection
    }
  }
</script>

<style>
.spacer {
  height: 60px;
}
</style>