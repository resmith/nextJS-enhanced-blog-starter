const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')
const glob = require('glob')

;(async () => {
  const searchPattern = `public/**/`
  console.log(`convertWebp: searchPattern: ${searchPattern}`)
  const blogs = glob.sync(searchPattern)

  //remove path and extension to leave filename only
  blogs.map(directory => {
    const imageDirectory = `${directory}*.{jpg,png}`
    // const toDirectory = directory.replace(Constants.markdownDir, 'public')
    console.log(`converting directory: ${imageDirectory} to: ${directory}`)

    imagemin([imageDirectory], {
      destination: directory,
      plugins: [imageminWebp({ quality: 95, sharpness: 1, nearLossless: 80 })],
    })
  })

  console.log('Images optimized')
})()
