<template>
  <div class="result">
    <div :class="this.won === 'user' ? 'won' : ''" class="user">
      <h3 class="title">You Picked</h3>
      <State :state="this.userState" />
    </div>
    <div v-show="this.houseState !== undefined" class="show-res">
      <h5 class="title">
        {{
          this.won === 'user'
            ? 'You Won'
            : this.won === 'house'
            ? 'You lost'
            : "It's a tie!"
        }}
      </h5>
      <button @click="this.playAgain">Play Again</button>
    </div>
    <div :class="this.won === 'house' ? 'won' : ''" class="house">
      <h3 class="title">The House Picked</h3>
      <img
        v-if="this.houseState === undefined"
        class="loader"
        src="../assets/loader.svg"
        alt=""
      />
      <State v-else :state="this.houseState" />
    </div>
  </div>
</template>

<script>
import State from './states/State.vue';
import functions from '../utils/stateToVal';
export default {
  mounted() {
    this.userVal = functions.FindVal(this.userState);
    setTimeout(() => {
      const val = Math.floor(Math.random() * 3);
      this.houseState = functions.FindState(val);
      this.houseVal = val;
      this.whoWon();
    }, 300);
  },
  name: 'Result',
  data() {
    return {
      houseState: undefined,
      houseVal: undefined,
      userVal: undefined,
      res: undefined,
      won: undefined,
    };
  },
  methods: {
    whoWon() {
      const res = (this.houseVal - this.userVal + 3) % 3;
      this.res = res;
      if (res === 0) {
        this.won = 'none';
      } else if (res === 1) {
        this.won = 'house';
      } else if (res === 2) {
        this.won = 'user';
        this.res = -1;
      }
      //   console.log(this.won, this.res);
      this.$emit('save-result', -this.res);
    },
    playAgain() {
      this.$emit('play-again');
    },
  },
  props: {
    userState: {
      type: String,
      required: true,
    },
  },
  components: {
    State,
  },
};
</script>
