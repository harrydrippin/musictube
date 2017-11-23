<template>
  <div id="header">
    <SearchBox />
    <AlertAsk />
		<AlertVideoConfirmed />
		<AlertListConfirmed />
		<AlertSearchFail />
  </div>
</template>

<script>
import AlertAsk from "./header/AlertAsk.vue";
import AlertListConfirmed from "./header/AlertListConfirmed.vue";
import AlertSearchFail from "./header/AlertSearchFail.vue";
import AlertVideoConfirmed from "./header/AlertVideoConfirmed.vue";
import SearchBox from "./header/SearchBox.vue";

export default {
  name: 'header',
  data () {
    return {};
  },
  components: {
    AlertAsk, AlertListConfirmed, AlertSearchFail,
    AlertVideoConfirmed, SearchBox
  }
}
</script>

<style>
</style>
