<template>
  <div class="dplayer"></div>
</template>

<script>
  import DPlayer from 'DPlayer'
  export default {
    props: {
      autoplay: {
        type: Boolean,
        default: false
      },
      theme: {
        type: String,
        default: '#FADFA3'
      },
      loop: {
        type: Boolean,
        default: true
      },
      lang: {
        type: String,
        default: 'zh'
      },
      screenshot: {
        type: Boolean,
        default: false
      },
      hotkey: {
        type: Boolean,
        default: true
      },
      preload: {
        type: String,
        default: 'auto'
      },
      video: {
        type: Object,
        required: true,
        validator(value) {
          return typeof value.url === 'string'
        }
      }
    },
    data() {
      return {
        dp: null
      }
    },
    mounted() {
      const player = this.dp = new DPlayer({
        element: this.$el,
        autoplay: this.autoplay,
        theme: this.theme,
        loop: this.loop,
        lang: this.lang,
        screenshot: this.screenshot,
        hotkey: this.hotkey,
        preload: this.preload,
        video: {
          url: this.video.url,
          pic: this.video.pic,
          type: 'normal'
        }
      })

      player.on('play', () => {
        this.$emit('play')
      })

      player.on('pause', () => {
        this.$emit('pause')
      })

      player.on('canplay', () => {
        this.$emit('canplay')
      })

      player.on('playing', () => {
        this.$emit('playing')
      })

      player.on('ended', () => {
        this.$emit('ended')
      })

      player.on('error', () => {
        this.$emit('error')
      })
    }
  }
</script>
