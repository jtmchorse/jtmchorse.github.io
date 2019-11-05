---
title: Day 13
date: "2019 10 24"
description: "Data in gatsby"
---
 <div>
      <h2>Data in gatsby</h2>
      <p>Part four, section one. Recap of what we've already done so far and an overview of Data in gatsby.</p>
      <p>Alright, lets make another new layout component. I've been a fan of using the fake contact page as our testing ground, lets keep that up.</p>
      <p>
        <Link to="contact">/contact</Link>
      </p>
      <p>
        Alright, now we have a new layout, and an even more ugly about page. I'm currently refusing to play with the typography plugins. Now its time to.. do some GraphQL.
      </p>
      <p>I love the seperation of content like this. As the tutorial points out, say we have a bunch of pages and we want the site title to be on them, we <i>could</i> type that into every page, but then finding and replacing that in the future is not only giant PITA it also is a bad way to work.</p>
      <p>This is also why I'm much more of a fan of the css-modules vs the b.s. crap of styling directly in the js pages.. I'm looking at you tutorial <a href="https://www.gatsbyjs.org/tutorial/part-four/#create-a-new-example-site">part-four layout.js</a></p>
      <img src={`../../Screenshot from 2019-10-28 05-58-29.png`}
        alt="css directly on markup"
      />
      <p>So where are we with all this querying? My contact page now includes the "hello world - gasby" site title. Because, you know, I'm super creative.</p>
      <p>One thing I would like to call special attention to is, that if you are like me and type every part of the examples out so that you pay extra close attention to the query const.</p>
      <img
        src="../../Screenshot from 2019-10-28 06-03-41.png"
        alt="query const in the about page"
      />
      <p>There are bacticks, ` that you need to include. Gatsby doesn't like it if you don't have them there. In fact Gatsby doesn't like it so much that you won't be able to move forward until you put them in. Please remember to backtick responsibly.</p>
      <p>See you on day 14.</p>
    </div>
  