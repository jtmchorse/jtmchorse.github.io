import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
        bundled up as one little self contained thing. All so we don't have css issues with other
        components. Thanks Obama.
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
