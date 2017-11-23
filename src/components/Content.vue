<template>
  <div id="content">
    <div class="content-container row">
      <div class="content-queue col-4">
        <PlayQueue />
      </div>
      <div class="content-video col-8">
        <VideoContainer 
          :title="getTitle"
          :channel="getChannel"
          :videoId="getVideoId"/>
      </div>
    </div>
  </div>
</template>

<script>
import PlayQueue from "./content/PlayQueue.vue";
import VideoContainer from "./content/VideoContainer.vue";

export default {
  name: 'content',
  data () {
    return {};
  },
  computed: {
    getTitle () {
      return this.$store.getters.nowPlaying.title;
    },
    getChannel () {
      return this.$store.getters.nowPlaying.channel;
    },
    getVideoId () {
      return this.$store.getters.nowPlaying.videoId;
    }
  },
  components: {
    PlayQueue, VideoContainer
  }
}
</script>

<style>
.content-container {
  margin-top: 20px;
}
</style>
