---
title: Day 8
date: "2019 10 18"
description: " Gatsby Tutorial part-two, css. Specifically"
---
 <div>
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
   