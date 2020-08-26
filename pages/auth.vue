<template>
  <v-container class="login">
    <UserAuthForm
      buttonText="Login"
      :hasName="false"
      :submitHandler="login"
    />   
  </v-container>
</template>

<script>
  import UserAuthForm from '@/components/auth/UserAuthForm.vue'
  export default {
    name: 'auth',
    data: () => ({
      loading: false
    }),
    components: {
      UserAuthForm
    },
    methods: {
      async login(userData) {
        this.loading = true
        try {
          await this.$auth.loginWith('local', {
            data: userData
          })   
        } catch {

        }
      },
      async register(userData) {
        await this.$axios.post('/users', userData)
        this.$auth.loginWith('local', {
          data: userData
        })
      }
    }
  }
</script>
