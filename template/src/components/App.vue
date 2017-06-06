<template>
    <div id="app">
        <Hello name="Vue"></Hello>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    import Hello from './Hello'

    @Component({
        components: { Hello },
        name: "App"
    })
    export default class App extends Vue {

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

    html {
	    font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
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

