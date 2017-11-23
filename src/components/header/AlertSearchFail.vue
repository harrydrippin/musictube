<template>
  <div id="alert-search-fail">
    <div class="collapse search-fail">
      <div class="result-wrapper">
        <span class="result-indicator"><span style="color: red;">검색에 실패했습니다!</span> 링크를 다시 한 번 확인해주세요. ㅠㅡㅠ </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert-search-fail',
  data () {
    return {};
  }
}
</script>

<style>
.result-indicator {
  color: grey;
}

.result-wrapper {
  background-color: #EFEFEF;
  padding: 30px;
}
</style>
