<template>
  <div id="queue-item-list" 
    class="queue-item-list">
    <div v-for="(item, index) in queueData"
        :key="item.videoId">
      <QueueItem 
      :item="item"
      :index="index"/>
    </div>
  </div>
</template>

<script>
import QueueItem from "./QueueItem.vue";
export default {
  name: 'queue-item-list',
  data () {
    return {
      queueData: this.$store.getters.queue
    }
  },
  components: {
    QueueItem
  }
}
</script>

<style>
.queue-item-list {
  margin-top: 15px;
  border-bottom: 1px solid rgb(194, 194, 194);
}
</style>
