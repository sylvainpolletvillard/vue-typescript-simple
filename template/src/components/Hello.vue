<template>
	<div>
		<img src="../assets/logo.png">
		<h1>Hello {{ name }}</h1>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'
	import { Prop } from 'vue-property-decorator'

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