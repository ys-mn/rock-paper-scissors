<template>
  <div class="states">
    <div class="state-wrapper">
      <State state="rock" @choose="this.choose" />
    </div>
    <div class="state-wrapper">
      <State state="paper" @choose="this.choose" />
    </div>
    <div class="state-wrapper">
      <State state="scissors" @choose="this.choose" />
    </div>
  </div>
</template>

<script>
import State from './states/State.vue';
// import D3Network from 'vue-d3-network';

export default {
  name: 'Pick',
  props: {
    id: Number,
  },
  data: () => {
    return {
      picked: undefined,
    };
  },
  methods: {
    choose(state) {
      this.$emit('choose', state);
    },
  },
  components: {
    State,
    // D3Network,
  },
};
</script>
<style src="vue-d3-network/dist/vue-d3-network.css"></style>
