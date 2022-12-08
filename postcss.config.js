// https://www.youtube.com/watch?v=Kn2SKUOaoT4

const cssnano = require('cssnano');

module.exports = {
  plugins: [
    cssnano({
      preset: "default"
    })
  ]
};