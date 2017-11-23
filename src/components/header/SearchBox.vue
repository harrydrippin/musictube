<template>
  <div id="search-box">
    <div class="header">
      <img class="header-logo" src="https://github.com/harrydrippin/musictube/blob/master/dist/logo.png?raw=true">
      <span class="header-logo-typo">MusicTube</span>
      <div class="header-search">
          <input v-model="search"
            type="text" 
            id="header-search-input" 
            placeholder="여기에 YouTube 링크를 붙여넣으세요" 
            size="50"
          >
      </div>
    </div>
  </div>
</template>

<script>
var API_KEY = "AIzaSyDMn2vGOUet7LMjHE75CvOVhzrJA9DrqRw";
export default {
  name: 'search-box',
  data () {
    return {
      search: ""
    };
  },
  watch: {
    search: function (youtubeLink) {
      this.getYoutubeInfo();
    }
  },
  methods: {
    getYoutubeInfo: _.debounce(function () {
      var link = this.search;

      if (link == "") return;
      if (link.includes("youtube.com")) {
        // Normal Version Link
        var query = this.parseQueryString("?" + link.split("?")[1]);
        if (query["list"] != undefined) {
          this.parseVideoWithList(query);
        } else {
          this.parseVideo(query["v"]);
        }
      } else if (link.includes("youtu.be")) {
        // Shortened Version Link
        var videoId = link.split(".be/")[1];
        this.parseVideo(videoId)
      } else {
        alert("Error");
      }
    }),

    parseVideo: function (videoId) {
      $.ajax({
        url: "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId + "&key=" + API_KEY,
        type: 'GET',
        success: (data) => {
          var title = data.items[0].snippet.title;
          var channel = data.items[0].snippet.channelTitle;
          this.$store.dispatch("enqueue", {
            videoId: videoId,
            title: title,
            channel: channel
          });
          this.$store.dispatch("check", false);
        }
      });
    },

    parseVideoWithList: function (query) {
      $.ajax({
        url: "https://content.googleapis.com/youtube/v3/playlistItems?maxResults=50&part=snippet&playlistId=" + query["list"] + "&key=" + API_KEY,
        type: 'GET',
        success: (data) => {
          var videos = data.items.map((i) => (i.snippet));
          videos.forEach((value, index, array) => {
            this.$store.dispatch("enqueue", {
              videoId: value.resourceId.videoId,
              title: value.title,
              channel: value.channelTitle
            });
          });
          this.$store.dispatch("check", false);
        }
      });
    },

    parseQueryString: function (queryString) {
        var query = {};
        var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
    }
  }
}
</script>

<style>
.header-logo {
  width: 72px;
  height: 72px;
}

.header-logo-typo {
  color: red; 
  font-weight: 500;
}

.header {
  display: block;
  width: 100%;
  padding: 20px 30px;
  background-color: white;
  font-size: 1.7em;
}

.header-search {
  display: inline-block;
  margin-left: 15px;
  padding: 0px 15px;
  font-size: 0.8em;
  line-height: 1em;
  vertical-align: center;
  border-left: 1px solid rgb(194, 194, 194);
}

#header-search-input {
  margin-left: 10px;
  border: 0;
  color: grey;
}

#header-search-input:active {
  border: 0;
}
</style>
