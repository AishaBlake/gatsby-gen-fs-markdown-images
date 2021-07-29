const fs = require("fs")
const path = require("path")
const faker = require(`faker`)
const rimraf = require("rimraf")
const ProgressBar = require("progress")

const N = parseInt(process.env.N, 10) || 100 // Article count

console.log("Start of gen")
console.time("End of gen")

const imgDir = "./fab-images/"

generateArticles()
  .then(() => {
    console.timeEnd("End of gen")
    console.log()
  })
  .catch(e => {
    throw new Error(e.stack)
  })

function generateArticles() {
  // Assuming there now exists a pool of images of given dimensions, generate an article and copy
  // an image per article and give it the same name.

  console.log("Generating", N, "articles with one random image")

  const bar = new ProgressBar(
    `[:bar] :current/${N} | :percent | :elapsed sec | :rate /s | :eta secs remaining`,
    {
      total: N,
      width: 30,
      renderThrottle: 50,
    }
  )

  rimraf.sync("./generated_articles")
  rimraf.sync("./generated_images")
  fs.mkdirSync("./generated_articles", { recursive: true })
  fs.mkdirSync("./generated_images", { recursive: true })

  for (let i = 0; i < N; ++i) {
    const sentence = faker.lorem.sentence()
    const slug = faker.helpers.slugify(sentence).toLowerCase()
    const randomImgNumber = Math.floor(Math.random() * 58 + 1)
    fs.writeFileSync(
      path.join("./generated_articles", slug + ".md"),
      createArticle(i, sentence, slug)
    )
    fs.copyFileSync(
      path.join(imgDir, randomImgNumber + ".jpg"),
      path.join("./generated_images", slug + ".jpg")
    )
    bar.tick()
  }
  bar.terminate()

  console.log("Finished preparing " + N + " articles")
}

function createArticle(n, sentence, slug) {
  const desc = faker.lorem.sentence()

  return `---
articleNumber: ${n}
title: "${sentence.replace(/"/g, '\\"')}"
description: "${desc.replace(/"/g, '\\"')}"
slug: '${slug}'
date: ${faker.date.recent(1000).toISOString().slice(0, 10)}
rngImg: ../generated_images/${slug}.jpg
---

# ${sentence}

> ${desc}

${faker.lorem.paragraphs(2)}
`
}
