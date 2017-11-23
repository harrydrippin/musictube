<template>
  <div id="alert-ask">
    <div class="collapse search-ask">
      <div class="result-wrapper">
        <span class="ask-indicator">링크에서 플레이 리스트가 감지되었습니다! 어떻게 할까요? (영상은 50개까지만 허용됩니다.) </span>
        <button id="answer-list" type="button" class="btn btn-danger">모든 동영상 추가하기</button>
        <button id="answer-one" type="button" class="btn btn-secondary">이 동영상만 추가하기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert-ask',
  data () {
    return {};
  }
}
</script>

<style>
.ask-indicator {
  color: grey;
}

.result-wrapper {
  background-color: #EFEFEF;
  padding: 30px;
}

#answer-list {
  margin-left: 15px;
}
</style>
