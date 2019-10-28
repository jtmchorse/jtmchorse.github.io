import React from 'react';
import {css} from '@emotion/core';
import {Link } from 'gatsby';
export default({children}) => (
    <div 
    css={css`
    margin: 0 auto;
    max-width: 700px;
    padding:2em 1.5em;
    `}>
    <Link to={`/`}>
        <h3
        css={css`
        margin_bottom:2e 
        display:inline-block;
        font-style:normal;
        `}
        >
        Pandas Eating Lots
        </h3>
    </Link>
    <Link
      to={`/about/`}
      css={css`
        float: right;
      `}
    >
    About
    </Link>
    {children}
    </div>
)