<template >
	<div class="order-form">
		<form>
		  <v-stepper v-model="e1">
				<v-row>

					<div class="order-form__fields">
				    <v-stepper-header>
				      <v-stepper-step :complete="e1 > 1" step="1">Personal</v-stepper-step>

				      <v-icon>mdi-chevron-right</v-icon>

				      <v-stepper-step :complete="e1 > 2" step="2">Shipping</v-stepper-step>

				      <v-icon>mdi-chevron-right</v-icon>

				      <v-stepper-step step="3">Payment</v-stepper-step>
				    </v-stepper-header>

						<v-col cols="12" md="12">
							<v-stepper-items>

							<!-- /* Personal Step  */ -->
				      <v-stepper-content step="1">
				      	<v-spacer class="pa-2"></v-spacer>
				      	
								<ValidationObserver class="order-form_fields" ref="observer" v-slot="{ validate, reset }">
									
							    <form>

							      <ValidationProvider v-slot="{ errors }" name="Name" rules="required">
							        <v-text-field
							          v-model="name"
							          :error-messages="errors"
							          label="Full Name"
							          required
							        ></v-text-field>
							      </ValidationProvider>
							      <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
							        <v-text-field
							          v-model="email"
							          :error-messages="errors"
							          label="E-mail"
							          required
							        ></v-text-field>
							      </ValidationProvider>
							      <ValidationProvider v-slot="{ errors }" name="Phone" rules="required">
							        <v-text-field
							          v-model="phoneNumber"
							          :error-messages="errors"
							          label="Phone"
							          v-mask="phoneMask"
							          required
							        ></v-text-field>
							      </ValidationProvider>	

							    </form>

							  </ValidationObserver>

							  <v-spacer class="pa-4"></v-spacer>	

				        <v-btn
				          color="#00c58e"
				          @click="e1 = 2"
				          class="white--text"
				        >
				          Continue
				        </v-btn>			  
				      </v-stepper-content>

						<!-- /* Shipping Step  */ -->
				      <v-stepper-content step="2">
								<ValidationObserver class="order-form_fields" ref="observer" v-slot="{ validate, reset }">
							    <form>      	
									<ValidationProvider v-slot="{ errors }" name="Street Address" rules="required">
							        <v-text-field
							          v-model="street"
							          :error-messages="errors"
							          label="Street Address"
							          required
							        ></v-text-field>
							      </ValidationProvider>
							      <ValidationProvider>
							        <v-text-field
							          v-model="additional_data"
							          label="Apt, Suite, Gate, (optional)"
							        ></v-text-field>
							      </ValidationProvider>
							      <ValidationProvider v-slot="{ errors }" name="City" rules="required">
							        <v-text-field
							          v-model="city"
							          :error-messages="errors"
							          label=" City"
							          required
							        ></v-text-field>
							      </ValidationProvider>	
							      

							      <ValidationProvider v-slot="{ errors }" name="Country" rules="required">

								        <v-select
								          v-model="country"
								          :error-messages="errors"
								          data-vv-name="select"
								          :items="countries"
								          label=" Country"
								          required
								        ></v-select>

							      </ValidationProvider>				  
							      <ValidationProvider v-slot="{ errors }" name="Zip Code" rules="required|numeric">
								        <v-text-field
								          v-model="zipCode"
								          :error-messages="errors"
								          label=" Zip Code"
								          required
								        ></v-text-field>

							      </ValidationProvider>			
							      
							    </form>
							  </ValidationObserver>

							  <v-spacer class="pa-1"></v-spacer>	

				        <v-btn
				          color="#00c58e"
				          @click="e1 = 3"
				          class="white--text"
				        >
				          Continue
				        </v-btn>

				        <v-btn text @click="e1 = 1">Back</v-btn>
				      </v-stepper-content>

						<!-- /* Payment Step  */ -->
				      <v-stepper-content step="3">
				      	<span>
				      		<v-icon color="#00c58e">mdi-lock-check</v-icon>
				      			This is a secure 128-bit SSL encrypted payment
				      		</span>

				      		<v-spacer class="pa-2"></v-spacer>

					      <ValidationProvider v-slot="{ errors }" name="Cardholder Name" rules="required">
					        <v-text-field
					          v-model="cardHolder"
					          :error-messages="errors"
					          label="Cardholder Name"
					          required
					        ><v-icon slot="append" color="#9f9f9f">mdi-account</v-icon></v-text-field>
					      </ValidationProvider>	

					      <ValidationProvider v-slot="{ errors }" name="Card Number" rules="required">
					        <v-text-field
					          v-model.trim="cardNumber"
					          v-mask="generateCardNumberMask"
					          :error-messages="errors"
					          label="Card Number"
					          required
					        >
				        		<v-icon>{{ getCardType }}</v-icon>

				        	</v-text-field>
					      </ValidationProvider>		

					      <ValidationProvider v-slot="{ errors }" name="Expire Date" rules="required">
					        <v-text-field
					          v-model="expireDate"
					          v-mask="expireDateMask"
					          :error-messages="errors"
					          label="Expire Date"
					          required
					        ><v-icon slot="append" color="#9f9f9f">mdi-calendar-month</v-icon></v-text-field>
					      </ValidationProvider>					      
					      <ValidationProvider v-slot="{ errors }" name="Security Code" rules="required">
					        <v-text-field
					          v-model="cardCvv"
					          :error-messages="errors"
					          label="Security Code"
					          required
					        ><v-icon slot="append" color="#9f9f9f">mdi-shield-lock</v-icon></v-text-field>
					      </ValidationProvider>			

					      <v-spacer class="pa-4"></v-spacer>		      

				        <v-btn
				          color="#00c58e"
				          @click="submitHandler"
				          class="white--text"
				        >
				          Pay Securely
				        </v-btn>

				        <v-btn text @click="e1 = 2">Back</v-btn>
				      </v-stepper-content>

				   		</v-stepper-items>
				  	</v-col>
				  </div>
				

					<div class="order-form__cart">
						<p>Your order list</p>

					</div>		


				</v-row>

			</v-stepper>
		</form>
	</div>
</template>


<script>
  import { required, email, max, numeric } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, 
  					setInteractionMode } from 'vee-validate'
  import { mask } from 'vue-the-mask'


  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  extend('numeric', {
    ...numeric,
    message: '{_field_} field can be only numeric',
  })

  export default {
  //	layout: 'empty',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
    	e1: 1,
      name: '',
      email: '',
      phoneNumber: '',
      phoneMask: "+#(###)-###-##-##",

      street: "",
      additional_data: '',
      city: "",
      country: null,
      countries: [
        'Азербайджан',
        'Армения',
        'Казахстан',
        'Киргизия',
        'Молдавия',
        'Россия',
        'Таджикистан',
        'Узбекистан',
      ],
      zipCode: '',

			cardHolder: '',
			cardNumber: "",
			cardCvv: "",
			expireDate: "",
			minCardYear: new Date().getFullYear(),
			minCardMonth: new Date().getMonth(),
			amexCardMask: "#### ###### #####",
			otherCardMask: "#### #### #### ####",
			expireDateMask: "## / ##",
			ccvMask: "####",		


			fullPage: false,
      checkbox: null,

    }),
    directives: { mask },
    methods: {
      submitHandler () {
      	console.log(`${this.getCardType}`, this.cardNumber)
        this.$refs.observer.validate()
      },
      clear () {
        this.$refs.observer.reset()
      },
    },
		computed: {
			getCardType () {
				let number = this.cardNumber 
				let re = new RegExp("^4") 
				if (number.match(re) != null) return "visa" 
				re = new RegExp("^(34|37)") 
				if (number.match(re) != null) return "amex" 
				re = new RegExp("^5[1-5]") 
				if (number.match(re) != null) return "mastercard" 
				re = new RegExp("^6011") 
				if (number.match(re) != null) return "discover" 
				return ''  // default type
			},
			generateCardNumberMask () {
				return this.getCardType === "amex" ? this.amexCardMask : this.otherCardMask 
			}		
		},    
  }
</script>


<style>

.order-form{
	display: flex !important;

}

.order-form__fields {
  flex: 3 !important;
  order: 1 !important;
  background-color: transparent;
}

.order-form__cart {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  flex: 2 !important;
  order: 3 !important;
  background-color: #F2F4F7;
  height: 100vh;
}

.v-stepper {
	height: 500px !important;
	width: 800px !important;
}

.v-stepper .v-stepper__step__step {
	display: none !important;
}

.v-stepper__header {
	justify-content: left !important;
	box-shadow: none !important;	
	margin-left: 30px;
	margin-top: 10px;
}

.v-stepper__content {
	padding-top: 0 !important;
}

.v-stepper__step {
	padding-right: 10px;
	padding-left: 10px;
}
/*
.v-stepper__step .v-stepper__step--complete {
	color: red !important;
}

.v-stepper__step .v-stepper__step--active  {
	color: green !important;
}*/


</style>


<!--
/* 
*	 Full Name
*  Phone
*  Email

*	 Street Address
*  Apt,Suite, Gate
*  City
*  Country 
*  Zip code

*  Carrdholder name
*  Card number
*  Expire date
*  Security code
*/
-->
