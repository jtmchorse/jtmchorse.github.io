---
title: Day 11
date: "2019 10 22"
description: "Gatsbyjs tutorials part-three"
---
  <div>
      <h2>Day 11 - Gatsbyjs tutorials part-three</h2>
      <p>Holy typography plugins batman, look at that h1 right now.</p>
      <img
        src={"../../Screenshot from 2019-10-25 05-39-26.png"}
        alt="H1 typographic styles from gatsby plugin" />
      <p>Interesting little side bar there, installing plugins. Learning how to add multiple plugins to the gatsby-config.js will be useful I imagine.</p>
      <p>Moving on to making layouts. Its suggested to start with another new site, but I think I'll keep plugging away with the one I have for now.</p>
      <p>Lets make some a new basic type page, /contact will do. And man is it basic. Pure text goodness.</p>
      <p><a href="https://www.gatsbyjs.org/tutorial/part-three/#-create-your-first-layout-component">Gatsby then has us make a new layout</a>, only problem for me is I already have `layout` so I'll name this one layout2.js</p>
      <img
        src={"../../Screenshot from 2019-10-25 06-04-08.png"}
        alt="Code used in layout2.js"
      />
      <p>I'm sure that can guess what comes next. Contact.js + Layout2</p>
      <p>At this point I've come to really despise typing import React from 'react', and because I love keyboard shortcuts and bloating my code editor with plugins I decided to install a Gatsby Snippet pack. Now I just hit Ctrl + Space, type in imr and I'm presented with a lovely little window that will tell me what I'm about to paste. </p>
      <p>Thank you nickytonline.</p>
      <img
        src={"../../Screenshot from 2019-10-25 06-06-49.png"}
        alt="Sample snippet from vs code plugin for react"
      />
      <p>Now to import Layout2 into Contact.js. Yes, yes you guessed it, import that. Here is the fun part for me, we can name it anything we want to when we call it in. Import Pacha? Sure, it'll work and it makes me smile.</p>
      <img
        src={"../../Screenshot from 2019-10-25 06-12-13.png"}
        alt="Naming things for fun"
      />
      <p>However that doesn't really tell me what the thing does. If someone else had to jump in and was looking down through the code.. WTF why Pacha? Or in all reality you are likely to forget why you did what you did in all of 2 or 3 days, let alone coming back to a project months after you put it down. So, yeah. Lets be lame and call it by what it does. Layout2 it is..</p>
      <p>So just what does Pacha, I mean.. Layout2 actually give us?</p>
      <img
        src={"../../Screenshot from 2019-10-25 06-26-04.png"}
        alt="Basic contact page, minimal css"
      />
      <p>Our layout component takes this basic page, and well wraps a layout around it.</p>
      <img
        src={"../../Screenshot from 2019-10-25 06-26-21.png"}
        alt="Basic contact page, minimal css"
      />
      <p>Now that we have a new layout, whenever we make a page we'll just call the layot2 component and all our pages will have the same base look.</p>
      <p>If you have ever install the basic gatsby site, you'll see that layouts can house other components as well. Just look up at the nav here, and the footer. Both of those components are inside the layout componet. I bet we'll get to do that pretty soon in the tutorials.</p>
    </div>

   