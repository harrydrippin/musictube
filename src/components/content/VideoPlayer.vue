<template>
  <div id="video-player" class="video-player">
    <div class="no-video" v-if="this.videoId == undefined || this.videoId == ''">
    </div>
    <iframe v-else
      id="youtube-player" 
      frameborder="0" 
      allowfullscreen="1" 
      gesture="media" 
      width="100%" 
      height="100%" 
      :src="youtubeLink"></iframe>
  </div>
</template>

<script>
export default {
  name: 'video-player',
  props: ["videoId"],
  data () {
    return {};
  },
  computed: {
    youtubeLink () {
      return "https://www.youtube.com/embed/" + this.videoId + "?controls=2&enablejsapi=1&widgetid=1&autoplay=1";
    }
  }
}
</script>

<style>
.video-player {
  width: 100%;
  height: 480px;
}

.no-video {
  width: 100%;
  height: 480px;
  background-color: lightgrey;
}
</style>
