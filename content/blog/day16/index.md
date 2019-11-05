---
title: Day 16
date: "2019 10 28"
description: "Transformer plugins"
---
 <div>
      <h2>Transformer plugins</h2>
      <p>Remember how I said there was a difference in what I was having returned in my query vs what was shown in the tutorial? And then how I said things might have changed a litttle on gatsyb's site, and also that I was likely doing something wrong.</p>
      <p>It was me.</p>
      <p>When you install the gatsby source filesystem plugin, you get to tell it which path to look at.</p>
      <img
        src={"../../Screenshot from 2019-10-31 05-16-38.png"}
        alt="gatsby config plugin details"
      />
      <p>When I had installed mine prior to yestdays tutorial, I had told the path to look inside images. Hence the returns of my query were only ever images.</p>
      <p>This is what we're seeing now.</p>
      <img
        src={"../../Screenshot from 2019-10-31 05-19-30.png"}
        alt="gatsby config plugin details"
      />
      <p>Now that we have that out of the way, we get to start messing about with markdown files.</p>
      <p>After we make our first markdown page, aka MD, we'll need to make a new .js page to run a new query. This time we'll need to install a new plugin so Gatsby knows how to parse MD files. This plugin happens to be called `gatsby-transformer-remark`. </p>
      <p>Then we start building out the query in our GraphiQL page.</p>
      <img
        src={"../../Screenshot from 2019-10-31 06-06-46.png"}
        alt="gatsby config plugin details"
      />
      <p>Again like we learned yesterday, we need to access that data in the js file and display it.</p>
      <img
        src={"../../Screenshot from 2019-10-31 06-07-57.png"}
        alt="gatsby config plugin details"
      />
      <p>This time we've added a sort to the query pages with a more recent date will show up at the top, and then because we don't want our one MD page to get lonely we make anoter one.</p>
      <p>Example <Link to="new-index">page</Link></p>
      <p>As best I can tell at this current time these MD pages have not actually been rendered into an actual page that we can navigate to. More research required here..</p>
    </div>
   