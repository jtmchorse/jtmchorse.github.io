---
title: Day 14
date: "2019 10 25"
description: "Data continued, static."
---
 <div>
      <h2>Data continued, static.</h2>
      <p>There is this thing called a StaticQuery, to be honest it currently feels exactly like the query we did yesterday. We are only grabbing the site title from the gatsby-config.js</p>
      <p>As this is my first real forray into gatsby, it sounds like the static query is a shiny new. Up until this only pages were allowed to do querying?</p>
      <p>I wish I could say that whenever I'm confused I go search the docs and find answers that make me feel better. There <a href="https://www.gatsbyjs.org/docs/static-query/#how-staticquery-differs-from-page-query">are great examples of the difference between StaticQuery and page query.</a></p>
      <p>Huh, well since I have no context as to how much of an issue <bold>not</bold> having static queries around, I'll just have to assume this is a big deal. After all its right there in the basic tutorials, so ...</p>
      <p>We can now see the updated header here
        <Link to="contact">/contact</Link>
      </p>
      <p>Just in case that gets updated yet again, here's a screen shot of it.</p>
      <img
        src={'../../Screenshot from 2019-10-29 05-36-20.png'}
        alt="updated contact page header, using static query"
      />
      <h2>Bonus - Source Plugins</h2>
      <p>Since the static thing took less time than expected, its time to dive into <a href="https://www.gatsbyjs.org/tutorial/part-five/">part-five</a>.</p>
      <p>Nice, over halfway through these!</p>
      <p>Finally, we're starting to dig into the whole localhost:8000/__graphql setup.</p>
      <img
        src={'../../Screenshot from 2019-10-29 05-54-30.png'}
        alt="basic graphql query for site metadata, using graphiql"
      />
      <p>Not that I understand <i>just</i> how useful this is going to be, but I can tell for certain that I'd not like to try and sort out those data bindings in my head, if that is what they are called.</p>
      <p>Lol, lets try to make bad things..</p>
      <img
        src={`../../Screenshot from 2019-10-29 06-14-10.png`}
        alt="bad graphql queries"
      />
      <p>Yo dawg, I heard you like children so we childrend your children with some children children children..</p>
      <p>Okay maybe not <i>userful</i> per se, but fun to mess about with and see what you can do.</p>
    </div>
   