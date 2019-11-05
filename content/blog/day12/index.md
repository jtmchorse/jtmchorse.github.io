---
title: Day 12
date: "2019 10 23"
description: "Continued layout & the Link tag"
---

  <div>
      <h2>Day 12 - Continued layout & the Link tag</h2>
      <p>Add stuff inside the layout we just made.</p>
      <p>Todays finishing up of part-three has us adding some navigation elements insid the layout2.js file</p>
      <img
        src={"../../Screenshot from 2019-10-27 06-09-46.png"}
        alt="Additional elements inside the layout2.js file"
      />
      <p>And now we have navigation links on our <Link to="/contact">/contact</Link> page</p>
      <img
        src={"../../Screenshot from 2019-10-27 06-24-10.png"}
        alt="Rendered nav from our updated layout component"
      />
      <p>I've been wondering what the difference between the a tag and the link tag is. </p>
      <p>Enter <a href="https://www.gatsbyjs.org/docs/linking-between-pages/">"The Gatsby link component"</a></p>
      <p>Essentially we are told that the link component is supposed to be used for internal gatsby linking, because "but with added performance benefits"..</p>
      <p>But, what are those benefits?</p>
      <p>In the Other resources section on the docs page we find a link to the <a href="https://www.gatsbyjs.org/docs/gatsby-link/">Gatsby API.</a></p>
      <p>Alright, now we're getting somewhere. A table of contents!</p>
      <p>No we are starting to get an idea for some of those "added performance benefits"</p>
      <p>ActiveStyle | ActiveClassName | getProps (isCurrent, isPartiallyCurent, href, etc etc)</p>
      <p>Cool, so use the link tag for internal links, and if you are going to be running a CMS build <a href="https://www.gatsbyjs.org/docs/gatsby-link/#reminder-use-link-only-for-internal-links">this</a> little helper so you don't have to worrry. It'll render a link for internal and a href for external.</p>
      <p>Man I hardly feel like we've scratched the surface with the layouts & api, and thats just Gatsby, we aren't event taking into consideration that Gatsby is really just React.</p>
    </div>
  