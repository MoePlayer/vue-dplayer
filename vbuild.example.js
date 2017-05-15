// this will copy ./static/** to ./dist-example/**

module.exports = {
  entry: 'example/index.js',
  dist: 'dist-example',
  homepage: '/',
  port: 5000,
  html: {
    title: 'Vue-DPlayer'
  }
}
