import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import User from './about-css-modules';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
    </div>

    <div>
      <h2>Day 10 - Finishing up zsh components and some nvm love</h2>
      <p>For whatever reason every time I start up a bash, or more recently a zsh terminal I have to run `nvm install v11.10.1`. That is I need to do that if I'd like to see my Gatsby project running. This is also true if I decide to run gatsby-cli from inside the vs-code terminal...</p>
      <p>Overall not that big of a deal right? 15ish characters, heck I've used more than that to whine about it right now.</p>
      <p>But it is annoying and you have to remember to do it every time, if only there were a way to set that per project.</p>
      <p>Enter the .nvmrc rile! Woo, now I have a simple file that literally just contains number, in my case at the time of this its `11.10.1`. Nothing fancy for sure, and that brings our typing down to `nvm use`. Not a bad change of events, and you don't have to remember what version number to type. Usually I'd be over the moon about that and ready to call it good, but I did notice something while googling around trying to remember just what the .nvmrc file was called.</p>
      <p>Remember just a minute ago when I said I've moved back to using zsh? As it turns out nvm & zsh seem to be happy little partners. At least that is according to this <a href="https://github.com/nvm-sh/nvm#zsh">Github doc</a>. For once installing something in my .zshrc and trying to run it didn't have any downsides, everything worked right out of the box as it were.</p>
      <img
        src={"../../Screenshot from 2019-10-24 05-26-46.png"}
        alt="Example terminal window of zsh auto running nvm use"
      />
      <p>NVM now auto runs `nvm use` when the little snippet in the .zshrc see a .nvmrc file. Whew! All that just to save 15ish characters..</p>
      <p>Now the fun part, lets try and import our fancy about-css-modules exmaple</p>
      <p>
        <User
          username="Jane Dont"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          excerpt="I'm not Jane, go away."
        />
      </p>
      <p>Welllllll... As it turns out I don't know how to properly setup a component just yet.</p>
      <img
        src={"../../Screenshot from 2019-10-24 05-49-47.png"}
        alt="Example user module js" />
      <img
        src={"../../Screenshot from 2019-10-24 05-51-45.png"}
        alt="Example user module js" />
      <p>Clearly I'm missing something about setting up the module for use in other pages/modules, or maybe just pulling it in the right way. I'm sure it'll be blatently obvious what I'm doing wrong in the near future. Maybe day 11? 15? 25? Hopefully sooner rather than later.</p>
      <p>And yes, yes I did update my theme.</p>
      <p>On a happy note though, that is all for Gatsbyjs.org tutorial part-two. Moving onto part-three.</p>
    </div>
    <div>
      <h2>Day 9</h2>
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
    <div>
      <h2>Day 8</h2>
      <p>
        Gatsby Tutorial part-two, css. Specifically{" "}
        <a
          href="https://www.gatsbyjs.org/tutorial/part-two/#using-component-scoped-css"
          target="_blank"
          rel="noopener noreferrer"
        >
          #using-component-scoped-css
        </a>
      </p>
      <p>
        This example takes us through building a micro component, and giving it
        some css. Not just any css file though, this is a .module.css file
      </p>
      <p>Why is that special?</p>
      <p>Component-scoped CSS</p>
      <p>
        As the tutorial page describes, "CSS Modules are very popular because
        they let you write CSS normally but with a lot more safety. The tool
        automatically generates unique class and animation names, so you don’t
        have to worry about selector name collisions."
      </p>
      <p>But why is that useful?</p>
      <p>
        Lets take a look at our{" "}
        <Link to="/about-css-modules/">container componet</Link> that we created
        in this section.
      </p>
      <img
        src={"../../Screenshot from 2019-10-22 05-44-17.png"}
        alt="Screen shot of css component"
      />
      <p>
        Nothing super fancy, obviously. But we can still use this to try and
        learn what we should be here.
      </p>
      <img
        src={"../../Screenshot from 2019-10-22 06-06-11.png"}
        alt="Browser rendered view of css component"
      />
      <p>
        What is super neat here in the inspector is that we have unique
        classnames for the component. According to the tutorial, by using the
        css as a .module.css Gatsby will render components like this, all
        bundled up as one little self contained thing. All so we don't have css
        issues with other components. Thanks Obama.
      </p>
      <p>
        This is just a simple example of course, I'm assuming that in the future
        you can hold components inside other components and so on. Feels like
        building any sort of not basic site would require that.
      </p>
      <p>Unexpected issues from today</p>
      <ul>
        <li>Inserting images</li>
      </ul>
    </div>
    <div>
      <h2>Day 7</h2>
      <p>package.json</p>
      <p>
        Long story short, as best I can tell running the gatsby-cli update
        installed a newer dependency inside my repo, and there was the mismatch
        between gatsby-cli and react. Finally I side by side checked both pages
        in my fancy site vs a fresh install and aside from the gh-deploy script,
        the only difference I could find was that cli update in the dependencies
      </p>
      <p>
        How to fix it? Delete that gatsby-cli line in the package.json, trash
        the node-modules folder and re-run yarn
      </p>
      <p>Tentatively run gatsby develop...</p>
      <p>wait</p>
      <p>Error! WHAT!... Oh..</p>
      <p>
        Something is on port 8000 already, go ahead and use a different one? Ya,
        I think I will
      </p>
    </div>
    <div>
      <h2>Day 6</h2>
      <p>Dependecy hell</p>
      <p>
        So I was continuing to work through the tutorials, only to be met with a
        little "hey update gatsby-cli" suggestion in my bash shell. And I did.
        And given what I described this days overview as, I'm guessing you can
        tell what transpired
      </p>
      <p>Everything stopped working.</p>
      <p>error The above error occurred in the StoreStateProvider component:</p>
      <p>in StoreStateProvider in App</p>
      <p>
        React will try to recreate this component tree from scratch using the
        error boundary you provided, App. error Warning: App: Error boundaries
        should implement getDerivedStateFromError(). In that method, return a
        state update to display an error message or fallback UI. error UNHANDLED
        REJECTION
      </p>
      <p>
        Error: Invariant Violation: Invalid hook call. Hooks can only be called
        inside of the body of a function component. This could happen for one of
        the following reasons: 1. You might have mismatching versions of React
        and the renderer (such as React DOM) 2. You might be breaking the Rules
        of Hooks 3. You might have more than one copy of React in the same app
        See https://fb.me/react-invalid-hook-call for tips about how to debug
        and fix this problem.
      </p>
      <p>FML, my family is awake now and I need to go focus on that.</p>
    </div>
    <div>
      <h2>Day 5</h2>
      <p>You might be wondering what happened to day 1-4, I'll tell you.</p>
      <p>Day 1 - Install gatsby default locally, change some text</p>
      <p>Day 2 - Install gh-pages, deploy to github pages, life is good!</p>
      <p>Day 3 - Lol wut? Gatsby won't run `develop` anymore</p>
      <p>
        Day 4 - Okay, so turns out running gh-pages builds everything into /root
        and just really mucks things up from a development standpoint, but
        considering the idea is to build a static site I'll work around that for
        now
      </p>
      <p>
        Day 5 - Move all development into a feature branch, then build in master
        and deploy that to gh-pages.
      </p>
    </div>
    <div>
      <h1>Good morning.</h1>
      <p>
        Welcome to my new gatsby site. but why? Read more about it on{" "}
        <Link to="/about">about</Link>.
      </p>
      <p>
        Eventually I'll be doing weekly posts about front end development, but
        for now I'm going to have to be happy with a single page.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
