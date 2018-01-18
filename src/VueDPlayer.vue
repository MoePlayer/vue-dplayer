<template>
  <div class="dplayer"></div>
</template>

<script>
  import DPlayer from 'DPlayer'
  export default {
    props: {
      options: {
        type: Object
      }
    },
    data() {
      return {
        dp: null
      }
    },
    mounted() {
      const player = this.dp = new DPlayer(this.options || {})
      const events = player.events
      Object.keys(events).forEach(item => {
        if (item === 'events') {
          return false
        } else {
          events[item].forEach(event => {
            player.on(event, () => this.$emit(event))
          })
        }
      })
    }
  }
</script>
<style src="../node_modules/dplayer/dist/DPlayer.min.css"></style>
