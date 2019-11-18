---
title: Day 27
date: "2019 11 13"
description: "Udemy - The Gatsby Masterclass Day 6 - GraphQL Arguments"
---

### GraphQL Args and Variables

Today we head back to the GraphiQL page and start writing out a new query. Instead of going through the allMarkdownRemark section, we head down markdownRemark.

`query($slug: String!) {
  markdownRemark(fields:{
    slug: {eq: $slug}
  }){
    html
    frontmatter {
      title
    }
  }
}`

What I find interesting so far is that where you see the `slug:{eq: $slug}` bit. Originally that was passed a string of "page-2" for our second markdown post, but now we've made it all super fancy with a string variable (that was declared right after query) and then we set the variable later. In this case we set it manually again, so not exactly reducing our workload, but hey its programming so we know we can get the var and do what we want later. Right?
