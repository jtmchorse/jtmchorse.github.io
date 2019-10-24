(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{212:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(210),r=a(209),s=a(87),i=a(143);t.default=function(){return o.a.createElement(l.a,null,o.a.createElement(r.a,{title:"Home"}),o.a.createElement("div",null,o.a.createElement("h2",null,"Day 10 - Finishing up zsh components and some nvm love"),o.a.createElement("p",null,"For whatever reason every time I start up a bash, or more recently a zsh terminal I have to run `nvm install v11.10.1`. That is I need to do that if I'd like to see my Gatsby project running. This is also true if I decide to run gatsby-cli from inside the vs-code terminal..."),o.a.createElement("p",null,"Overall not that big of a deal right? 15ish characters, heck I've used more than that to whine about it right now."),o.a.createElement("p",null,"But it is annoying and you have to remember to do it every time, if only there were a way to set that per project."),o.a.createElement("p",null,"Enter the .nvmrc rile! Woo, now I have a simple file that literally just contains number, in my case at the time of this its `11.10.1`. Nothing fancy for sure, and that brings our typing down to `nvm use`. Not a bad change of events, and you don't have to remember what version number to type. Usually I'd be over the moon about that and ready to call it good, but I did notice something while googling around trying to remember just what the .nvmrc file was called."),o.a.createElement("p",null,"Remember just a minute ago when I said I've moved back to using zsh? As it turns out nvm & zsh seem to be happy little partners. At least that is according to this ",o.a.createElement("a",{href:"https://github.com/nvm-sh/nvm#zsh"},"Github doc"),". For once installing something in my .zshrc and trying to run it didn't have any downsides, everything worked right out of the box as it were."),o.a.createElement("img",{src:"../../Screenshot from 2019-10-24 05-26-46.png",alt:"Example terminal window of zsh auto running nvm use"}),o.a.createElement("p",null,"NVM now auto runs `nvm use` when the little snippet in the .zshrc see a .nvmrc file. Whew! All that just to save 15ish characters.."),o.a.createElement("p",null,"Now the fun part, lets try and import our fancy about-css-modules exmaple"),o.a.createElement("p",null,o.a.createElement(i.default,{username:"Jane Dont",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg",excerpt:"I'm not Jane, go away."})),o.a.createElement("p",null,"Welllllll... As it turns out I don't know how to properly setup a component just yet."),o.a.createElement("img",{src:"../../Screenshot from 2019-10-24 05-49-47.png",alt:"Example user module js"}),o.a.createElement("img",{src:"../../Screenshot from 2019-10-24 05-51-45.png",alt:"Example user module js"}),o.a.createElement("p",null,"Clearly I'm missing something about setting up the module for use in other pages/modules, or maybe just pulling it in the right way. I'm sure it'll be blatently obvious what I'm doing wrong in the near future. Maybe day 11? 15? 25? Hopefully sooner rather than later."),o.a.createElement("p",null,"And yes, yes I did update my theme."),o.a.createElement("p",null,"On a happy note though, that is all for Gatsbyjs.org tutorial part-two. Moving onto part-three.")),o.a.createElement("div",null,o.a.createElement("h2",null,"Day 9"),o.a.createElement("p",null,"More of the css componets, today featuring extend css and js."),o.a.createElement("p",null,"Our first steps are to add a module.css file to the pages directory, why there I have no idea. Feels like a bad idea for, organization but then again maybe thats not the point and the fine folks at gatsby are just trying to get us running."),o.a.createElement("p",null,"Then as you can imagine, we need to load that css file into a page. We're continuing with the about-css-modules page we started yesterday. After we import it ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/tutorial/part-two/#css-modules"},"into the page (step 3"),", we actually console log it so we can get a better idea of how the modules.css name scoping works."),o.a.createElement("img",{src:"../../Screenshot from 2019-10-23 05-41-31.png",alt:"Screen shot of module page import calls"}),o.a.createElement("p",null,"Personally ever since I learned that you can pass a string into a console.log statement and still pass the thing you are trying to log, all in one go I've never looked back. For those not terribly familiar with logs, I'm referring to the console.log('styles', styles) part. You'll notice the first styles is inside quotes, that is the string, and the second part is the modules.css object that we've imported on line 4."),o.a.createElement("img",{src:"../../Screenshot from 2019-10-23 05-50-01.png",alt:"console log of styles obect"}),o.a.createElement("p",null,"Now if you remember all the way back to yesterdya, day 8, we learned about the component scoping css aspect of the modules.css. Here we get to see some of it in action. Later after we build a new component I'm sure we'll be seeing it rendered to the dom."),o.a.createElement("p",null,"Neat, now that we see that we can continuing with the css module example and build out a component."),o.a.createElement("p",null,"The rest will have to wait till tomorrow, as I'm out of time for the day.")),o.a.createElement("div",null,o.a.createElement("h2",null,"Day 8"),o.a.createElement("p",null,"Gatsby Tutorial part-two, css. Specifically"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/tutorial/part-two/#using-component-scoped-css",target:"_blank",rel:"noopener noreferrer"},"#using-component-scoped-css")),o.a.createElement("p",null,"This example takes us through building a micro component, and giving it some css. Not just any css file though, this is a .module.css file"),o.a.createElement("p",null,"Why is that special?"),o.a.createElement("p",null,"Component-scoped CSS"),o.a.createElement("p",null,'As the tutorial page describes, "CSS Modules are very popular because they let you write CSS normally but with a lot more safety. The tool automatically generates unique class and animation names, so you don’t have to worry about selector name collisions."'),o.a.createElement("p",null,"But why is that useful?"),o.a.createElement("p",null,"Lets take a look at our"," ",o.a.createElement(s.Link,{to:"/about-css-modules/"},"container componet")," that we created in this section."),o.a.createElement("img",{src:"../../Screenshot from 2019-10-22 05-44-17.png",alt:"Screen shot of css component"}),o.a.createElement("p",null,"Nothing super fancy, obviously. But we can still use this to try and learn what we should be here."),o.a.createElement("img",{src:"../../Screenshot from 2019-10-22 06-06-11.png",alt:"Browser rendered view of css component"}),o.a.createElement("p",null,"What is super neat here in the inspector is that we have unique classnames for the component. According to the tutorial, by using the css as a .module.css Gatsby will render components like this, all bundled up as one little self contained thing. All so we don't have css issues with other components. Thanks Obama."),o.a.createElement("p",null,"This is just a simple example of course, I'm assuming that in the future you can hold components inside other components and so on. Feels like building any sort of not basic site would require that."),o.a.createElement("p",null,"Unexpected issues from today"),o.a.createElement("ul",null,o.a.createElement("li",null,"Inserting images"))),o.a.createElement("div",null,o.a.createElement("h2",null,"Day 7"),o.a.createElement("p",null,"package.json"),o.a.createElement("p",null,"Long story short, as best I can tell running the gatsby-cli update installed a newer dependency inside my repo, and there was the mismatch between gatsby-cli and react. Finally I side by side checked both pages in my fancy site vs a fresh install and aside from the gh-deploy script, the only difference I could find was that cli update in the dependencies"),o.a.createElement("p",null,"How to fix it? Delete that gatsby-cli line in the package.json, trash the node-modules folder and re-run yarn"),o.a.createElement("p",null,"Tentatively run gatsby develop..."),o.a.createElement("p",null,"wait"),o.a.createElement("p",null,"Error! WHAT!... Oh.."),o.a.createElement("p",null,"Something is on port 8000 already, go ahead and use a different one? Ya, I think I will")),o.a.createElement("div",null,o.a.createElement("h2",null,"Day 6"),o.a.createElement("p",null,"Dependecy hell"),o.a.createElement("p",null,'So I was continuing to work through the tutorials, only to be met with a little "hey update gatsby-cli" suggestion in my bash shell. And I did. And given what I described this days overview as, I\'m guessing you can tell what transpired'),o.a.createElement("p",null,"Everything stopped working."),o.a.createElement("p",null,"error The above error occurred in the StoreStateProvider component:"),o.a.createElement("p",null,"in StoreStateProvider in App"),o.a.createElement("p",null,"React will try to recreate this component tree from scratch using the error boundary you provided, App. error Warning: App: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI. error UNHANDLED REJECTION"),o.a.createElement("p",null,"Error: Invariant Violation: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 1. You might have mismatching versions of React and the renderer (such as React DOM) 2. You might be breaking the Rules of Hooks 3. You might have more than one copy of React in the same app See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem."),o.a.createElement("p",null,"FML, my family is awake now and I need to go focus on that.")),o.a.createElement("div",null,o.a.createElement("h2",null,"Day 5"),o.a.createElement("p",null,"You might be wondering what happened to day 1-4, I'll tell you."),o.a.createElement("p",null,"Day 1 - Install gatsby default locally, change some text"),o.a.createElement("p",null,"Day 2 - Install gh-pages, deploy to github pages, life is good!"),o.a.createElement("p",null,"Day 3 - Lol wut? Gatsby won't run `develop` anymore"),o.a.createElement("p",null,"Day 4 - Okay, so turns out running gh-pages builds everything into /root and just really mucks things up from a development standpoint, but considering the idea is to build a static site I'll work around that for now"),o.a.createElement("p",null,"Day 5 - Move all development into a feature branch, then build in master and deploy that to gh-pages.")),o.a.createElement("div",null,o.a.createElement("h1",null,"Good morning."),o.a.createElement("p",null,"Welcome to my new gatsby site. but why? Read more about it on"," ",o.a.createElement(s.Link,{to:"/about"},"about"),"."),o.a.createElement("p",null,"Eventually I'll be doing weekly posts about front end development, but for now I'm going to have to be happy with a single page.")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-62687a24fb96c41da160.js.map