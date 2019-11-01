import React from "react";
import { Link, graphql } from 'gatsby';
import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <h4>{data.allMarkdownRemark.totalCount}
        Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>- {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
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
        fields {
          slug
        }
        excerpt
      }
    }
    totalCount
  }
}

`