<template>
  <div class="game">
    <Pick v-if="this.userPicked === undefined" @choose="this.choose" />
    <Result
      @save-result="this.saveResult"
      @play-again="this.playAgain"
      v-else
      :userState="this.userPicked"
    />
  </div>
</template>

<script>
import Pick from './Pick.vue';
import Result from './Result.vue';
export default {
  name: 'Game',
  props: {},
  data: () => {
    return {
      userPicked: undefined,
    };
  },
  methods: {
    choose(state) {
      this.userPicked = state;
    },
    playAgain() {
      this.userPicked = undefined;
    },
    saveResult(res) {
      this.$emit('save-result', res);
    },
  },
  components: {
    Pick,
    Result,
  },
};
</script>
