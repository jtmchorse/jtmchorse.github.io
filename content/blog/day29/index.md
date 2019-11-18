---
title: Day 29
date: "2019 11 17"
description: "Udemy - The Gatsby Masterclass Day 8 - Linking"
---

### Linking 

This video takes us through setting up some pagination. 

First we have to make some updates to the `gatsby-node.js` file. We start with making a new blogtemplate variable, and then creating a foreach loop to set some context for the pagination.

![for each loop](/for-each-loop.png)

Ironically having just typed this out while pausing the video, I'm not totally sure how it works. But for now I know we're creating all those varaibles to use in checking which page we're on, and how many posts to show per page. You can also see the ternary operator on the first line of the createPage function. We check the path, and if its anything other than the first page we use the currentPage variable _interpolated_ as the page number for the url.

I will say this about the video lessons so far, they don't do the deep dives I was expecting. At least not yet.

