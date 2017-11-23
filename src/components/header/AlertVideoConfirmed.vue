<template>
  <div id="alert-video-confirmed">
    <div class="collapse search-result">
      <div class="result-wrapper">
        <span class="result-indicator">다음 곡이 Play Queue에 추가되었습니다:</span><br>
        <span class="result-title">Coldplay - A Sky Full Of Stars (Official Video)</span><br>
        <span class="result-owner">Coldplay Official</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert-video-confirmed',
  data () {
    return {};
  }
}
</script>

<style>
.result-wrapper {
  background-color: #EFEFEF;
  padding: 30px;
}

.result-indicator {
  color: grey;
}

.result-title {
  font-size: 1.5em;
  color: black;
}

.result-owner {
  font-size: 1.3em;
  color: grey;
}
</style>
