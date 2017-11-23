<template>
  <div id="footer">
    <div class="credit">
      <span class="credit-text">
        <b style="color: red;">MusicTube</b>, 오직 당신의 음악만이.<br>
        MusicTube는 YouTube에 있는 동영상들을 <b>어떤 방해요소도 없이</b> 재생해주는 서비스예요.<br>
        맨 위에 YouTube 링크를 붙여넣으면 Queue에 들어가요. 재생 목록을 통째로 넣을 수도 있어요!<br>
        <span style="color: red;">개발이 진행 중이라서 아직 불안정해요!<br></span>
        <a href="https://facebook.com/harrydrippin">홍승환 (@harrydrippin)</a>이 개발하고, <a href="https://www.facebook.com/profile.php?id=100005173778573">황보준우 (@fangnook)</a>가 로고 만들어줬어요.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {};
  }
}
</script>

<style>
.credit {
  border-top: 1px solid rgb(194, 194, 194);
  width: 100%;
  text-align: center;
  color: grey;
  padding: 30px;
}

.credit-text {
  text-align: center;
  width: 100%;
}

.credit-text > a {
  color: red;
}
</style>
