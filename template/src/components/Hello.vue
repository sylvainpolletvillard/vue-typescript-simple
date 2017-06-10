<template>
	<div>
		<img src="../assets/logo.png">
		<h1>Hello {{ name }}</h1>
	</div>
</template>

<script lang="ts">
	import { Vue, Component, Prop } from 'vue-property-decorator'

	@Component({
		components: { }
	})
	export default class Hello extends Vue {
		@Prop() name: string;
	}
</script>

<style scoped>
	h1 {
		text-align: center;
	}
</style>