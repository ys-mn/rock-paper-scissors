<template>
  <div class="header">
    <div class="title">Rock<br />Paper<br />Scissors</div>
    <div class="score-board">
      <h6 class="score-text">score</h6>
      <h4 class="score-number">{{ this.score }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    score: Number,
  },
  data: () => {
    return {};
  },
};
</script>
