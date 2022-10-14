<template>
  <component :is="currentView" />
</template>

<script>
import Main from './components/Main.vue';
import Image from './components/Image.vue';
import Playground from './components/Playground.vue';

const routes = {
  '/': Main,
  '/image': Image,
  '/playground': Playground,
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
};
</script>

<style>

</style>