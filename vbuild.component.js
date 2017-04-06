module.exports = {
  entry: 'src/VueDPlayer.vue',
  // then user can access `window.VueDPlayer` in browser as well
  moduleName: 'VueDPlayer',
  html: false,
  minimize: false,
  sourceMap: false,
  filename: {
    js: 'Vue-DPlayer.js',
    css: 'Vue-DPlayer.css'
  },
  // this will not copy ./static/** to ./dist/**
  copy: false
}
