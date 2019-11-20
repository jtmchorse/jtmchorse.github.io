---
title: Day 31 
date: "2019 11 20"
description: "Udemy - The Gatsby Masterclass Day 10 - Sorting, Filterig etc w/ GraphQL"
---

### Sorting, Filtering, Limiting, Skipping with GraphQL Arguments / Listing Blog Posts

First off, I didn't know the graph _i_ QL explorer had a history tab. That'll come in handy for sure.

![Graphiql limit arguments](/2019-11-20-Graphiql-limits.png)

Next up, is the docs tab. Again not something I was aware of, maybe I should have taken a React class before this one? Turns out is super intuitive to use, click on the item you are wishing to have more info about. In our case this is the 'allMarkdownRemark" bit. And thats all you really need to do, just click on it and the docs tab will slide out and give you some detail info along with what can be passed. You can see from the screenshot above, I've passed it a limit of 2, and we're seeing 2 posts returned.

Moving on we have the filter function. This is much more robust than the limit argument, and some of the filter options even sort of make sense when you first look at them.

![Graphiql filter](/2019-11-20-Graphiql-filter.png)

For example
- EQ : Equals
- NE : Not Equals
- IN : works with arrays, finds a value that is _in_
- NIN : no no, not nine in nails this is _not in_ 
- regex : [now we have two problems](https://xkcd.com/1171/)
- glob : lets pretend I know how to use this. [Here is a good link](https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/graphql-reference.md#complete-list-of-possible-operators)

Finally we'll touch on sort. As expected we can sort on all sorts of things, in this example we're wanting to sort out posts by date. Luckily we have a date field in the frontmatter. We start off with the now somewhat familial writing of another query, But this time all we are doing is adding some bits to the `allMarkdownRemark` part.

![Graphiql date filter](/2019-11-20-Graphiql-filter-date.png)

I have to say, the little pop ups in graphiql are super duper handy.

And there we have it, we can sort our posts by date.
