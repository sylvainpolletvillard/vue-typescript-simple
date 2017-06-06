<template>
  <div id="app">
   <Hello :name="Vue"></Hello>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Hello from './Hello'

@Component({
  components: { Hello }
})
export default class extends Vue {

}
</script>
<style>
* {
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  grid-kiss:
  "+-----------+"
  "|     ↓     |"
  "| → Hello ← |"
  "|     ↑     |"
  "+-----------+"
}
</style>

