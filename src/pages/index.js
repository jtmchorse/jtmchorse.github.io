import React from "react";
import { Link, graphql } from 'gatsby';
import Layout from "../components/layout";

import SEO from "../components/seo";
// import User from './about-css-modules';

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <h3>100 days of code?</h3>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
              {node.frontmatter.title}{" - "}
              <span>{node.frontmatter.date}</span>
            <h4>
              <span>{node.frontmatter.description}</span>
              {"  "}
            </h4>
          </Link>
        </div>
      ))}
      <h4>{data.allMarkdownRemark.totalCount}
        Posts</h4>
    </Layout>
  )
}

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Slowly converting to blog</h1>
//       {data.allMarkdownRemark.edges.map(({ node }) => (
//         <div key={node.id}>
//           <Link to={node.fields.slug}>
//             <h3>
//               {node.frontmatter.title}{" | "}
//               <span>{node.frontmatter.description}</span>
//             </h3>
//           </Link>
//         </div>
//       ))}
//       <h4>{data.allMarkdownRemark.totalCount}
//         Posts</h4>

//   </Layout>
// );


export const query = graphql`
query IndexPage {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date
          description
        }
        
      }
    }
    totalCount
  }
}
`
// export default IndexPage;
