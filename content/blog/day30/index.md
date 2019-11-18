---
title: Day 30 
date: "2019 11 18"
description: "Udemy - The Gatsby Masterclass Day 9 - Numbered Pagination"
---

### Pagination, but with numbers.

This lesson was surprisingly short considering what was covered. In our previous lesson we created some pagination, with some logic to not show Prev Page if we're on the first page. 

We started with creating a few more junk markdown posts so we'd have handful to work with. Then we moved into the `blog-template.js` file and added a bit more code. Blog template is where we have all our logic for displaying the blog posts, and also our pagination logic. Ideally we should move the pagination to its own js file, but for now this is just fine.

![for each loop](/for-each-loop.png)

If you look at the above screenshot, on line 61, you'll see we have totalPages inside our context statement. This will be important.

Back over in our blog-template.js file, we need to pass that to to our _pageContext_ variable. You can see where we add that in the screen shot just blow, on line 8.

![page context variable](/page-context-blog-template-js.png)

Bringing that over to this template page gives us the integer to work with, and remember from our for each screenshot we have postsPerPage set to 1.

![pagination logic](/pagination-links-blog-template-js.png)

Now if we take a closer look at the highlighted section

![pagination logic highlited](/pagination-highlights-blog-template-js.png)

I'm going to be generalizing here as I don't currently have the in-depth knowledge to fully dive into the details here.

We take the Array.from method, and using the length of totalPages (at this point its 4) we then use index to count out how many page number we need. At least that is what it seems like we are doing. 


![rendered pagination](/rendered-pagination.png)

Tada! Ugly unstyled pagination, brought to you by PigDog :) . 
