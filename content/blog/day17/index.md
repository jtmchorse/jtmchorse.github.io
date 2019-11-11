---
title: Day 17.
date: "2019 10 29"
description: "Programmatically create pages from data."
---
### Programmatically create pages from data.

Ha, first paragraph today of the tuturoal, " you don’t want to just see excerpts, you want actual pages for your markdown files". Guess I know just what we'll be doing already!

Today we're building up the logic to take markdown files and make actual html pages out of them. We've started by making a new file at the root of the project and named it gatsby-node.js . Then we start with my favorite practice of console.logging the snot out of everything. You know, just to make sure we're getting the data we expect. Then we really start doing some neat stuff by building the pages. <a href="https://www.gatsbyjs.org/tutorial/part-seven/#creating-pages">Read about it here.</a>

Following further along we'll build out a new template, this time we make a folder called templates, then make a blog-post.js template page. We use that back over in gatsby-node.js

As you might have read before, you'll remember that I like to type out each line of code that I'm going through in the tutorials. Why? I think it helps me understand better what I'm doing. I have to read what I'm typing out, and you know, type it. This is useful, but also error prone..
![](/Screenshot&#32;from&#32;2019-10-30&#32;05-48-32.png)
![console erros](/Screenshot&#32;from&#32;2019-11-05&#32;05-33-43.png)
<!-- <img src={"..Screenshot from 2019-11-01 05-33-43.png"} -->

  <!-- alt="console erros"

/> -->

What you'll notice in the screenshot below is two nearly identical lines. I have taken to copying each line over, and pasting it above the line I typed out. This practice helps me troubleshoot where I mistyped. As you can see I'm the worst at spelling.

<img src={"../../Screenshot from 2019-11-01 05-39-05.png"}

  alt="typing error in js file"

/>

Now that we've got that working as expected, we <em>should</em> start seeing some pages that represent our two markdown files. <Link to="pandas-and-bananas/">pandas-and-bananas/</Link>

Now that we have those pages building out as pages, we can update our test page from yesterday to actually link to the pages.

<ul>

  <li>Update the gatsby import  <img src={"../../Screenshot from 2019-11-01 05-59-01.png"} alt="updated import function" /></li>


  <li>Add an internal Link tag. <img src={"../../Screenshot from 2019-11-01 06-00-32.png"} alt="updated import function" /></li>


  <li>Don't forget to update the query to include the slug. Otherwise gatsby will error out your page.. Ask me how I know.  <img src={"../../Screenshot from 2019-11-01 06-01-40.png"} alt="updated import function" /></li>

</ul>

Aaaaand we have two fancy md page <em>Descriptions</em> being returned on our <Link to="new-index">example page from yesterday</Link>. But now we can click on the links, and see real for real pages!

Really cool stuff. I know its not quite on the same level as creating all this type of work on your own, but folloing along with the tutorials is awsome.
    </div>
   