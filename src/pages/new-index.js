import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout";
// import SEO from "../components/seo";
// import { Link } from "gatsby";
// import User from './about-css-modules';


export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <h1>Amazing Pandas Eating Things</h1>
            <h4>{data.allMarkdownRemark.totalCount}
                Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <h3>
                        {node.frontmatter.title}{" "}
                        <span>- {node.frontmatter.date}</span>
                    </h3>
                    <p>{node.excerpt}</p>
                </div>
            ))}
        </Layout>
    )
}
export const query = graphql`
query  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MM, YYYY")
        }
        excerpt
      }
    }
    totalCount
  }
}

`