<template>
  <div id="video-info" class="video-informations">
      <span class="video-title">{{ this.title }}</span><br>
      <span class="video-owner">{{ this.channel }}</span>
  </div>
</template>

<script>
export default {
  name: 'video-info',
  props: ['title', 'channel'],
  data () {
    return {};
  }
}
</script>

<style>
.video-informations {
  padding: 30px 0px;
}

.video-title {
  color: black;
  font-size: 1.8em;
}

.video-owner {
  color: grey;
  font-size: 1.5em;
}
</style>
