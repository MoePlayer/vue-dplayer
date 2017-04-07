<template>
  <div id="app">
    <h1>Vue-DPlayer</h1>
    <h2>A Vue 2.x component of <a href="https://github.com/DIYgod/DPlayer" target="_blank">DPlayer</a></h2>
    <github-badge slug="sinchang/vue-dplayer" />
    <d-player :video="video"
              :autoplay="autoplay"
              @play="play"
              ref="player">
    </d-player>
  </div>
</template>

<script>
  import VueDPlayer from '../src/VueDPlayer.vue'
  import GitHubBadge from 'vue-github-badge'

  export default {
    data() {
      return {
        video: {
          url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
          pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
        },
        autoplay: false
      }
    },
    mounted() {
      // const player = this.$refs.player.dp
      // player.play()
      // setTimeout(() => {
      //   player.pause()
      // }, 2000)
    },
    methods: {
      play() {
        console.log('play callback')
      }
    },
    components: {
      'd-player': VueDPlayer,
      'github-badge': GitHubBadge
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  a {
    color: #42b983;
    text-decoration: none;
  }

  .dplayer {
    width: 800px;
    margin: 50px auto;
  }

  h1 {
    font-size: 54px;
    color: #42b983;
    margin: 30px 0 10px;
  }

  h2 {
    font-size: 22px;
    color: #555;
  }

  @media (max-width: 768px) {
    .dplayer {
      width: 90%;
    }

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 16px;
    }
  }
</style>
