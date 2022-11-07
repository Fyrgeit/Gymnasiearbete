<template>
  <Info />
  <component :is="currentView" />
</template>

<script>
import Main from './components/Main.vue';
import Intro from './components/Intro.vue';
import Image from './components/Image.vue';
import Exit from './components/Exit.vue';
import Export from './components/Export.vue';
import Info from './components/Info.vue';

const routes = {
  '/': Main,
  '/intro': Intro,
  '/image': Image,
  '/exit': Exit,
  '/export': Export,
}

export default {
  components: {
    Info
  },
  
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