<template>
  <div id="queue-item" class="queue-item" v-bind:class="classObject">
    <a v-on:click="play(index)"><span class="queue-item-title">{{ item.title }}</span></a><br>
    <span class="queue-item-owner">{{ item.channel }}</span>
  </div>
</template>

<script>
export default {
  name: 'queue-item',
  props: ['item', 'index'],
  data () {
    return {};
  },
  methods: {
    play(i) {
      this.$store.dispatch("play", parseInt(i));
    }
  },
  computed: {
    classObject: function () {
      return {
        'queue-item-now': this.$store.getters.nowPlaying.index == this.index
      }
    }
  }
}
</script>

<style>
.queue-item {
  border-top: 1px solid rgb(194, 194, 194);
  border-left: 5px solid rgb(194, 194, 194);
  padding: 15px 0 15px 10px;
  cursor: pointer;
}

.queue-item-title {
  color: black;
}

.queue-item-now {
  border-left: 5px solid #FF0000;
}

.queue-item-now > span {
  font-weight: 500;
}
</style>
