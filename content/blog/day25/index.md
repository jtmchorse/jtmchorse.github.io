---
title: Day 25
date: "2019 11 11"
description: "Udemy - The Gatsby Masterclass Day 5 - Slugs"
---

### Gatsby-node slugs
Continuing our path of following Gatsbyjs.orgs tutorials, we create the paths for the new posts. Just checkout [Day 17](/day17).

<!-- But to give an another overiew, since we're already here. We once again find ourselves in the `gatsby-node.js` file. I'll be using Day 17 as a reference, since the Udemy course is "paid content" and so on..

Lets start at the beginning, again.

We'll need to import things, like always.

First off, we'll need to set a var for our path plugin. <code>const path = require(`path\`)</code>

We'll also need to requite the gatsby-source-filesystem plugin we have. Same story, const that out.

<code>const { createFilePath } = require(`gatsby-source-filesystem`)</code>


![gatsby nodejs imports](/Day26-GatsbyNodejs.png)

Lets try and start unpacking this next exports function. What is this `onCreateNode` thing anyway? Good question, lets start digging => to the docs! [OnCreateNode](https://www.gatsbyjs.org/docs/node-apis/#createNode) and we get "Create a new node". Useful, but not terribly descriptive for those of us who might be lacking a little on the React side of knowledge gathering. If we scroll up to the top of the Actions page, we'll get a much more interesting block of text. 

`Gatsby uses Redux internally to manage state. When you implement a Gatsby API, you are passed a collection of actions (equivalent to boundActionCreators in redux) which you can use to manipulate state on your site.`

Oksay, so we have boundActionCreators as a collection of actions. I'm not sure about you, but I'm okay not digging into just what exactly boundActionCreators are today, but at least we know the basis of where Gatsby actions come from, and some of what they can do, per our scrolling on the actions page. Back to the `onCreateNode` bit. -->
