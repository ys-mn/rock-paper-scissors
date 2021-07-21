<template>
  <div @click="this.choose" class="state" :class="this.state">
    <img :src="this.getImgUrl" :alt="state" />
  </div>
</template>

<script>
export default {
  name: 'State',
  props: {
    state: {
      type: String,
      required: true,
    },
  },
  computed: {
    getImgUrl() {
      return require(`../../assets/images/icon-${this.state}.svg`);
    },
  },
  methods: {
    choose() {
      this.$emit('choose', this.state);
    },
  },
};
</script>
