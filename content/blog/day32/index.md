---
title: Day 32 
date: "2019 11 21"
description: "Udemy - The Gatsby Masterclass Day 11 - Formatting Dates"
---

### Formatstring

Angular or maybe just Gatsby uses an npm tool called [moment](https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens.). There are so many features, I can't even imagine a use for the majority. 

That being said, I've had day of the year turned on on my Gcal for years now, its a something I enjoy seeing. I think the day of the year is pretty awesome as well. I may or may not have added some extra markers in as well, you know, just for fun.

![moment formatstring](/2019-11-21-Date-formatstring.png)

### Excerpt

The next lesson today, since we have a short video is formatting the excerpt. Following what seems to be normal procedure, we hover on excerpt and get the little bubble window to pop up. Click that to show us what we can do.

![exceprt formatting](/2019-11-20-Graphiql-filter.png)

As you can see the in Docs tab for excerpt we have 3 options, two of which or useful right away.

Arguments
- Format | What you might expect, we can format how the excerpt is printed out. We get HTML, MD and plain text.
- PruneLength | Default is 140 characters, we can adjust as we see fit.
- Truncate | A boolean, which at the current moment doesn't seem to make much of a difference if its true or false. (I tried both and noticed no change in my query return)

----

Interesting thing to note, when trying to pull my fancy date formatting into this repo my date is a _string_ not a **Date**. Researching now.
