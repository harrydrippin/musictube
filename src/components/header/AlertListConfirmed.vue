<template>
  <div id="alert-list-confirmed">
    <div class="collapse search-result-list">
      <div class="result-wrapper">
        <span class="result-indicator">플레이 리스트가 Play Queue에 추가되었습니다:</span><br>
        <span class="result-title">Coldplay - A Sky Full Of Stars (Official Video) 외 동영상 5개</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert-list-confirmed',
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

</style>
