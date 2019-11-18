---
title: Day 28
date: "2019 11 15"
description: "Udemy - The Gatsby Masterclass Day 7 - Fetching Individual Post Data by Slug with Page Queries"
---

### Hello today we run page queries.

One thing I have picked up from this course is the term 'destructured'. I understand it, I think, at a high level, but I'll have to dig into it later to see what its all about.

Also, `dangerouslySetInnerHTML` is the best thing ever.

Finally something really neat happened in this course! If you've read any of the other days its more of a "oh look we already did this via gatsby docs.." and we're still sort of reviewing that right now. However we did run into an error and its always interesting to see how people trouble shoot. Since React is new to me, I don't know much about tracking errors down, but now I've got a better idea.

First, in this case we were working on a page, we set a variable and comment out the interpolation of the objects in markup. We do that so it'll render through react and not break anything, then we can pop over to the browser. Fire up our dev tools, and search for our variabl

![Comments out code snippet](/Commented-out-intrepolation-snippet.png)

![Firefox console](/Firefox-Console-Debugging.png)


If you look closely at the Firefox console, you'll see our _PostTemplate_ variable, and you can see our data, then markdownRemark and _then_ frontmatter. Looking back up at our commented out code, you'll notice it goes post.frontmatter, skipping the markdownRemark bit. 
