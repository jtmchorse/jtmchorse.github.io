import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h2>
        Day 5
      </h2>
      <p>You might be wondering what happened to day 1-4, I'll tell you.</p>
      <p>Day 1 - Install gatsby default locally, change some text</p>
      <p>Day 2 - Install gh-pages, deploy to github pages, life is good!</p>
      <p>Day 3 - Lol wut? Gatsby won't run `develop` anymore</p>
      <p>Day 4 - Okay, so turns out running gh-pages builds everything into /root and just really mucks things up from a development standpoint, but considering the idea is to build a static site I'll work around that for now</p>
      <p>Day 5 - Move all development into a feature branch, then build in master and deploy that to gh-pages.</p>


    </div>
    <div>
      <h1>Good morning.</h1>
      <p>Welcome to my new gatsby site. but why? Read more about it on <Link
        to="/about">
        about
       </Link>.</p>
      <p>Eventually I'll be doing weekly posts about front end development, but for now I'm going to have to be happy with a single page.</p>
    </div>
  </Layout>
)

export default IndexPage
