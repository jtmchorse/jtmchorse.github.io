---
title: Day 9
date: "2019 10 20"
description: "More of the css componets, today featuring extend css and js."
---

 <div>
      <p>More of the css componets, today featuring extend css and js.</p>
      <p>
        Our first steps are to add a module.css file to the pages directory, why
        there I have no idea. Feels like a bad idea for, organization but then
        again maybe thats not the point and the fine folks at gatsby are just
        trying to get us running.
      </p>
      <p>Then as you can imagine, we need to load that css file into a page. We're continuing with the about-css-modules page we started yesterday. After we import it <a href="https://www.gatsbyjs.org/tutorial/part-two/#css-modules">into the page (step 3</a>, we actually console log it so we can get a better idea of how the modules.css name scoping works.</p>
      <img
        src={"../../Screenshot from 2019-10-23 05-41-31.png"}
        alt="Screen shot of module page import calls"
      />
      <p>Personally ever since I learned that you can pass a string into a console.log statement and still pass the thing you are trying to log, all in one go I've never looked back. For those not terribly familiar with logs, I'm referring to the console.log('styles', styles) part. You'll notice the first styles is inside quotes, that is the string, and the second part is the modules.css object that we've imported on line 4.</p>
      <img
        src={"../../Screenshot from 2019-10-23 05-50-01.png"}
        alt="console log of styles obect"
      />
      <p>Now if you remember all the way back to yesterdya, day 8, we learned about the component scoping css aspect of the modules.css. Here we get to see some of it in action. Later after we build a new component I'm sure we'll be seeing it rendered to the dom.</p>
      <p>
        Neat, now that we see that we can continuing with the css module example and build out a component.
      </p>
      <p>The rest will have to wait till tomorrow, as I'm out of time for the day.</p>
    </div>
   