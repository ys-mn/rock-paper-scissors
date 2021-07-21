<template>
  <Header :score="this.score" />
  <Game @save-result="this.saveResult" />
</template>

<script>
import Header from './components/Header.vue';
import Game from './components/Game.vue';
export default {
  name: 'App',
  data() {
    return {
      score: 0,
    };
  },
  methods: {
    saveResult(res) {
      this.score += res;
    },
  },
  components: {
    Header,
    Game,
  },
};
</script>
