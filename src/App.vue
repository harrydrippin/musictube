<template>
  <div id="app">
    <div class="screen-container"> 
      <div class="service-container">
        <div class="service">
          <Header/>
          <Content/>
          <Footer/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'app',
  data() {
    return {};
  },
  components: {
    Header, Content, Footer
  }
}
</script>

<style>
.screen-container:before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  
  display: block;
  background-image: url('https://img.youtube.com/vi/VPRjCeoBqrI/mqdefault.jpg');
  background-size:cover;
  width: 100%;
  height: 100%;
  
  -webkit-filter: blur(30px);
  -moz-filter: blur(30px);
  -o-filter: blur(30px);
  -ms-filter: blur(30px);
  filter: blur(30px);
}

.screen-container {
  overflow: auto;
  position: relative;
}

.service-container {
  width: 100%;
  padding: 50px 250px;
}

.service {
  width: 100%;
  padding: 10px;
  background: white;
  box-shadow: 0px 0px 3px grey;
}
</style>
