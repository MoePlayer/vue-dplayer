<template>
  <div class="dplayer"></div>
</template>

<script>
  import DPlayer from 'DPlayer'
  export default {
    props: {
      autoplay: {
        type: Boolean
      },
      theme: {
        type: String,
        default: '#FADFA3'
      },
      loop: {
        type: Boolean
      },
      lang: {
        type: String,
        default: 'zh'
      },
      screenshot: {
        type: Boolean
      },
      hotkey: {
        type: Boolean
      },
      preload: {
        type: String,
        default: 'auto'
      },
      video: {
        type: Object,
        required: true,
        default() {
          return {
            url,
            pic
          }
        },
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
    }
  }
</script>
