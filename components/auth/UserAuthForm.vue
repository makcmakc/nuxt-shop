<template>
  <v-container class="fill-height" fluid>
    <v-row  align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 text--accent-2 teal--text">Sign in to Nuxt</h1>
                    <div class="text-center mt-4">
                      <v-btn icon class="mx-2" fab color="black" outlined>
                        <v-icon size="26px" color="grey darken-3">mdi-vk</v-icon>
                      </v-btn>
                      <v-btn icon class="mx-2" fab color="black" outlined>
                        <v-icon size="26px" color="grey darken-3">mdi-vk</v-icon>
                      </v-btn>
                      <v-btn icon class="mx-2" fab color="black" outlined>
                        <v-icon size="26px" color="grey darken-3">mdi-vk</v-icon>
                      </v-btn>                                            
                    </div>
                    <h4 class="text-center mlt-4">Ensure your Email for registration</h4>
                    <v-form>
                      <v-text-field
                        label="Email"
                        name="email"
                        prepend-icon="mdi-email"
                        type="text"
                        color="teal accent-3"
                      >                    
                      </v-text-field>
                      <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                        color="teal accent-3"
                      >                    
                      </v-text-field>                      
                    </v-form>
                    <h3 class="text-center mt-3">Forget your password?</h3>
                  </v-card-text>
                  <div class="text-center mt-3">
                    <v-btn rounded color="teal accent-3">Sign In</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="teal accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Hi, there</h1>
                    <h5 class="text-center">Enter your personal details and startjourney with us</h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step++">Sign Up</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="teal accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Welcome Back</h1>
                    <h5 class="text-center">To keep connected with us pleae login with your personal info</h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step--">Sign In</v-btn>
                  </div>                  
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 text--accent-2 teal--text">Create An Account</h1>
                    <div class="text-center mt-4">
                      <v-btn icon class="mx-2" fab color="black" outlined>
                        <v-icon size="26px" color="grey darken-3">mdi-vk</v-icon>
                      </v-btn>
                      <v-btn icon class="mx-2" fab color="black" outlined>
                        <v-icon size="26px" color="grey darken-3">mdi-vk</v-icon>
                      </v-btn>
                      <v-btn icon class="mx-2" fab color="black" outlined>
                        <v-icon size="26px" color="grey darken-3">mdi-vk</v-icon>
                      </v-btn>                                            
                    </div>
                    <h4 class="text-center mlt-4">Ensure your Email for registration</h4>
                    <v-form>
                      <v-text-field
                        label="Name"
                        name="name"
                        prepend-icon="mdi-account"
                        type="text"
                        color="teal accent-3"
                      >                    
                      </v-text-field>                      
                      <v-text-field
                        label="Email"
                        name="email"
                        prepend-icon="mdi-email"
                        type="text"
                        color="teal accent-3"
                      >                    
                      </v-text-field>
                      <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                        color="teal accent-3"
                      >                    
                      </v-text-field>                      
                    </v-form>
                    <h3 class="text-center mt-3">Forget your password?</h3>
                  </v-card-text>
                  <div class="text-center mt-3">
                    <v-btn rounded color="teal accent-3">Sign In</v-btn>
                  </div>
                </v-col>                
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import validations from "@/utils/validations"
  export default {
    props: {
      submitHandler: {
        type: Function,
        required: true,
      },
      buttonText: {
        type: String,
        required: true,
      },
      hasName: Boolean,
      registrationCheckboxes: Boolean
    },
    data: () => ({
      step: 1,

      valid: true,
      showPassword: false,
      userInfo: {
        name: 'Maxim',
        email: 'max@mail.ru',
        password: '12345'
      },
      ...validations
    }),
    // computed: {
    //   passwordValidation() {
    //     let validations = []
    //     if(this.passwordRequired){
    //       validations.push(this.required('password'))
    //     }
    //     validations.push(this.minLength('password', 8))
    //     return validations
    //   }
    // },    
  }
</script>
