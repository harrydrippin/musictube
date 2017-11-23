<template>
  <div id="video-container" class="video-container">
    <youtube :video-id="videoId"
      :player-width="'100%'"
      :player-height="480"
      :player-vars="{autoplay: 1}"
      @ended="videoEnded"></youtube>
    <VideoInfo 
      :title="title"
      :channel="channel"/>
  </div>
</template>

<script>
import VideoPlayer from "./VideoPlayer.vue";
import VideoInfo from "./VideoInfo.vue";

export default {
  name: 'video-container',
  props: ["videoId", "title", "channel"],
  data () {
    return {};
  },
  components: {
    VideoPlayer, VideoInfo
  },
  methods: {
    videoEnded () {
      this.$store.dispatch("check", true);
    }
  }
}
</script>

<style>
</style>
