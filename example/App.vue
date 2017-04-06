<template>
  <div id="app">
    <d-player :video="video" :autoplay="autoplay" ref="player"></d-player>
  </div>
</template>

<script>
  import VueDPlayer from '../src/VueDPlayer.vue'

  export default {
    data() {
      return {
        video: {
          url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4'
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
    components: {
      'd-player': VueDPlayer
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  .dplayer {
    width: 800px;
    margin: 50px auto;
  }
</style>
