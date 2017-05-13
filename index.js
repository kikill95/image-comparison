const express = require('express')
const app = express()

const config = require('./config')

app.listen(config.port, config.ip, () => {
  console.log(`Server running at ${config.ip}:${config.port}`)
})

let sets = [
  {
    actualImage: './images/original.png',
    expectedImage: './images/the_same.png',
    diffImage: './images/difference.png',
    info: 'original - the_same'
  },
  {
    actualImage: './images/original.png',
    expectedImage: './images/not_the_same.png',
    diffImage: './images/difference.png',
    info: 'original - not_the_same'
  },
  {
    actualImage: './images/original.png',
    expectedImage: './images/the_similar.png',
    diffImage: './images/difference.png',
    info: 'original - the_similar'
  },
  //
  {
    actualImage: './images/original.png',
    expectedImage: './images/test1.jpg',
    diffImage: './images/difference.png',
    info: 'original - test1'
  },
  {
    actualImage: './images/original.png',
    expectedImage: './images/test2.png',
    diffImage: './images/difference.png',
    info: 'original - test2'
  },
  {
    actualImage: './images/original.png',
    expectedImage: './images/test3.jpg',
    diffImage: './images/difference.png',
    info: 'original - test3'
  },
  {
    actualImage: './images/original.png',
    expectedImage: './images/test4.jpg',
    diffImage: './images/difference.png',
    info: 'original - test4'
  },
  {
    actualImage: './images/original.png',
    expectedImage: './images/test5.jpg',
    diffImage: './images/difference.png',
    info: 'original - test5'
  },
  {
    actualImage: './images/original.png',
    expectedImage: './images/test6.jpg',
    diffImage: './images/difference.png',
    info: 'original - test6'
  },
  {
    actualImage: './images/original.png',
    expectedImage: './images/test7.jpg',
    diffImage: './images/difference.png',
    info: 'original - test7'
  },
  {
    actualImage: './images/original.png',
    expectedImage: './images/test8.jpg',
    diffImage: './images/difference.png',
    info: 'original - test8'
  }
]

const imageDiff = require('image-diff')

sets.forEach(set => {
  imageDiff.getFullResult({
    actualImage: set.actualImage,
    expectedImage: set.expectedImage,
    diffImage: set.diffImage
  }, function (err, result) {
    if (err) {
      console.log('err:', set.info, err)
    } else {
      console.log('result:', set.info, result.total, result.percentage)
      if (result.percentage < 0.5) {
        console.log('Checked!')
      }
    }
  })
})

module.exports = app
