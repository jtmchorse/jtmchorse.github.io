---
title: Day 15
date: "2019 10 27"
description: "Building a page with GraphyQL query."
---
 <div>
      <h2>Building a page with GraphyQL query</h2>
      <p>Okay wow, so as a front-ender this is a bit unsual for me.</p>
      <p>Today we <Link to="my-files">build a page</Link> that uses the query we were just playing around with. Or really, a similar query that actually shows something worth showing.</p>
      <p>Per usual, we start with a new page, import all the things at the top. Then we get to do one of my forced favorite things. Console log!</p>
      <img
        src={"../../Screenshot from 2019-10-30 05-44-54.png"}
        alt="example code with console.log"
      />
      <p>Then we need to actually plop that query into our page. Remember folks, backtick with care `</p>
      <img
        src={"../../Screenshot from 2019-10-30 05-48-32.png"}
        alt="showing graphiql query side by side with query in gatsby"
      />
      <p>We can nearly copy paste the query over from our GraphiQL explorer into our new page. In this instance we need to simplify it by dropping the "MyQuery" part. I bet having that exter name will come in handy in the future with multiple queries on a page.</p>
      <p>Now that we've typed that all in, save that sucker and check your terminal. If you are like me, go ahead and fix all the typos, then go check your browser console.</p>
      <img
        src={"../../Screenshot from 2019-10-30 05-53-16.png"}
        alt="browser console log of query"
      />
      <p>Yay, now we know we didn't mess it up. Now that we have the data and know it, we an display it. Continuing to follow along, we build out a table, and then we get to the nitty gritty of accessing said data</p>
      <p>Again as a basic front-ender I'm not currently 100% on what we're doing here.</p>
      <img
        src={"../../Screenshot from 2019-10-30 05-57-23.png"}
        alt="data access code"
      />
      <p>But it does give us the values we want to print out, and in my experience if its valuable we will likey be doing it agian. And again. Eventually it should sink in.</p>
      <img
        src={"../../Screenshot from 2019-10-30 05-59-49.png"}
        alt="rendered data in the browser"
      />
      <p>Tada! we now have a table showing some stuff that we queried. <Link to="my-files">The page</Link>.</p>
      <p>I'm sure you've noticed a difference in my returned data vs what is shown just in the example just above this <a href="https://www.gatsbyjs.org/tutorial/part-five/#whats-coming-next">link</a></p>
      <p>My theory is they changed the code snippet in relation to the screen shot. It could also be that this current site isn't a 1 to 1 representation of the example gatsby site in the tutorial. It is likely a mixture of the two, leaning heavily on me not doing it right.</p>
      <p>The important part though is that we have made our own query, returned it in a new page and displayed it with markup.</p>
    </div>
   