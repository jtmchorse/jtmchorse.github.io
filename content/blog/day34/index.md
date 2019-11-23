---
title: Day 34 
date: "2019 11 23"
description: "Udemy - The Gatsby Masterclass Day 13 - Images"
---

### Image.js

Gatsby can do some really great stuff with images, to name a few. There is Base64, srcWebp, tracedSVG, cropFocus grayscale, rotate, serSetBreakpoints, and many others. In the screenshot below you can see that I added a second image to the query, and then exported it at the bottom of the js files. As you might expect, we now have two images on the home page.

![gatsby image](/2019-11-23-image-js.png)

However it is currently my understanding that you need to write a full query, import the image via ES6 like we did yesterday, or just use the static fold. The last one doesn't include any of the awesome features gatsby has built for images, so we lose all that neat stuff.

Currently on this 'site' I've been using the static folder. It makes it trivial to import images into markdown files.

What if I wanted to use all the advanced features, while using markdown files? How does Gatsby utalize those advanced features when you plug in something like TinaCMS or Contentful or even Drupal?

I'm assuming that at some point I'll learn the answers to those above questions. Maybe in this class, maybe somewhere else.

Lol ![blog images video](/2019-11-23-images-blog.png)


Gatsby remark-images, an npm plugin. 

Aaaaand there we have it, this class was worth it 

![transformer remark + images](/2019-11-23-remark-images.png)
