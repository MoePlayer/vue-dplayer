# Vue-DPlayer

> A Vue 2.x video player component based on [DPlayer](https://github.com/DIYgod/DPlayer).

[![NPM version](https://img.shields.io/npm/v/vue-dplayer.svg?style=flat)](https://npmjs.com/package/vue-dplayer) 
[![Vue 2.x](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/v2/guide/)
[![NPM downloads](https://img.shields.io/npm/dm/vue-dplayer.svg?style=flat)](https://npmjs.com/package/vue-dplayer) 

[Live Demo](https://dplayer.netlify.com/)

## Install

```bash
npm install vue-dplayer -S
```

## Usage

CDN: https://unpkg.com/vue-dplayer@latest/dist/

```js
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/vue-dplayer.css'

export default {
  components: {
    'd-player': VueDPlayer
  }
}
```

## Props
[Options Doc](http://dplayer.js.org/docs/#/?id=options)

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| options | Object | -- | all player options |

## Events
[Event binding Doc](http://dplayer.js.org/docs/#/?id=event-binding)

Example:

```js
<d-player @play="play"></d-player>

export default {
    methods: {
      play() {
        console.log('play callback')
      }
    }
```

## API

you can use all DPlayer [APIs](http://dplayer.js.org/docs/#/?id=api)

Example:

```js
<d-player ref="player"></d-player>

export default {
    mounted() {
      const player = this.$refs.player.dp
      player.play()
      setTimeout(() => {
        player.pause()
      }, 2000)
    }
```
## Related

- [vue-aplayer](https://github.com/SevenOutman/vue-aplayer)
- [DPlayer](https://github.com/DIYgod/DPlayer)

# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
