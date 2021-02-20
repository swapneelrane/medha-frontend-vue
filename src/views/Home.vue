<template>
  <div class="home">
    <img alt="Medha logo" src="@/assets/medha-favicon-144x144.png" />
    <HelloWorld msg="Welcome to Your Medha CIS App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
