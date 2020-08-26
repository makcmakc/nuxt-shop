<template>
	<div class="discover_more">
		<h1>discover_more</h1>
		<nuxt-link to="/auth">
			<v-btn>login</v-btn>
		</nuxt-link>
	</div>
</template>

<script>
	import slide from '~/mixins/slide.js'
	export default {
		name: 'discover_more',
		mixins: [slide],
		computed: {}
	}
</script>
