import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  QUEUE_ENQUEUE: "QUEUE_ENQUEUE",
  QUEUE_DEQUEUE: "QUEUE_DEQUEUE",
  QUEUE_PLAY: "QUEUE_PLAY",
  QUEUE_DELETE: "QUEUE_DELETE",
  QUEUE_CHECK: "QUEUE_CHECK",
  QUEUE_RESORT: "QUEUE_RESORT"
};

// states
const state = {
  queue: [],
  nowPlaying: {
    title: "Play Queue에 동영상이 없습니다!", 
    channel: "위 입력 칸에 YouTube 링크를 붙여넣어주세요.",
    videoId: "",
    index: -1
  },
};

// getters
const getters = {
  queue: state => state.queue,
  nowPlaying: state => state.nowPlaying
};

// actions
const actions = {
  enqueue({commit}, item) {
    console.log("MusicTube: Enqueue", item);
    commit(types.QUEUE_ENQUEUE, { item });
  },

  dequeue({commit, state}) {
    console.log("MusicTube: Dequeue", state.queue[0]);
    commit(types.QUEUE_DEQUEUE);
  },

  delete({commit}, index) {
    console.log("MusicTube: Delete", state.queue[index]);
    commit(types.QUEUE_DELETE, { index });
  },

  play({commit}, index) {
    console.log("MusicTube: Play", state.queue[index]);
    commit(types.QUEUE_PLAY, { index });
  },

  check({commit, state}, isEnd) {
    var now = state.nowPlaying;
    var queue = state.queue;
    if (isEnd) {
      commit(types.QUEUE_PLAY, -2);
      return;
    }
    if (now.videoId == "") {
      commit(types.QUEUE_PLAY, -2);
    } 
  }
};

// mutations
const mutations = {
  [types.QUEUE_ENQUEUE] (state, { item }) {
    state.queue.push(item);
  },

  [types.QUEUE_PLAY] (state, index) {
    if (index != -2) {
      var target = state.queue[index.index];
      state.nowPlaying = {
        title: target.title,
        channel: target.channel,
        videoId: target.videoId,
        index: index.index
      }
      return;
    }

    if (state.queue.length == 0) {
      state.nowPlaying = {
        title: "Play Queue에 동영상이 없습니다!", 
        channel: "위 입력 칸에 YouTube 링크를 붙여넣어주세요.",
        videoId: "",
        index: -1
      }
      return;
    }

    if (state.nowPlaying.index == -1 || state.nowPlaying.index == state.queue.length - 1) {
      state.nowPlaying.index = 0;
    } else state.nowPlaying.index += 1;

    var now = state.queue[state.nowPlaying.index];
    state.nowPlaying = {
      title: now.title,
      channel: now.channel,
      videoId: now.videoId,
      index: state.nowPlaying.index
    };
  },

  [types.QUEUE_DEQUEUE] (state) {
    state.queue.splice(0, 1);
  },

  [types.QUEUE_DELETE] (state, { index }) {
    state.queue.splice(index, 1);
  }
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
  }
);