---
title: Day 33 
date: "2019 11 22"
description: "Udemy - The Gatsby Masterclass Day 12 - Time to read, & Importing images"
---

### Adding time to read

After all that date mucking about, we go in and change that. Nothing very special there, update the query to include the additional requests and now you have a friendly rendered date.

Adding time to read

The time to read query doesn't take any arguments, and it returns an integer.

![time to read query](/2019-11-22-time-to-read.png)

Just after the H1 in the screenshot above you can see an H3 that interpolates the `timeToRead` query into markup on the page. Then you'll notice a ternary statement that prints out minutes or minute. 

If you are like me, you likely forget or just don't know what a ternary operator is. You can think of it _like_ an if else statement except it is not implicit, it is truthy. Read up on the details at every ones favorite resource [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### Importing images

Step 1, import images like any other ES6 resource, aka how we've been adding things to js files in Gatsby all along. See screenshot below.


![ES6 image import](/2019-11-22-ES6-import-image.png)

### Overview of Gatsby Image

Had just enough time left to watch the overview video of what Gatsby image is, and how it serves up files differently than the ES6 importing. Looks like one will have to update the image.js file to query the new image, then update the js file you want to include that. Currently that seems unsustainable, I'm likely missing something though.
