<template>
  <div id="play-queue">
    <div class="queue-container">
      <span class="play-queue-indicator">Play Queue</span>
      <QueueItemList />
    </div>
  </div>
</template>

<script>
import QueueItemList from "./QueueItemList.vue";
export default {
  name: 'play-queue',
  data () {
    return {};
  },
  components: {
    QueueItemList
  }
}
</script>

<style>
.play-queue-indicator {
  margin-left: 15px;
  font-weight: 500;
  color: darkgrey;
}
</style>
