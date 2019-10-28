import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout3';
export default ({ data }) => (
    <Layout>
        <div>
            <h1>About {data.site.siteMetadata.title}</h1>
            <img
                src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
                alt="Group of pandas eating bamboo"
            />
            <h1>Hi, this is an example contact page.</h1>
            <p>You can reach out to me on twitter, <a href="https://twitter.com/jmchorse">@jmchorse</a></p>
        </div>
    </Layout>
)
export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`