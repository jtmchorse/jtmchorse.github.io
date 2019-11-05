---
title: Day 7
date: "2019 10 17"
description: "package.json"
---

### package.json
  
Long story short, as best I can tell running the gatsby-cli update
installed a newer dependency inside my repo, and there was the mismatch
between gatsby-cli and react. Finally I side by side checked both pages
in my fancy site vs a fresh install and aside from the gh-deploy script,
the only difference I could find was that cli update in the dependencies
  
  
How to fix it? Delete that gatsby-cli line in the package.json, trash
the node-modules folder and re-run yarn
  
  Tentatively run gatsby develop...
  wait
  Error! WHAT!... Oh..
  
Something is on port 8000 already, go ahead and use a different one? Ya,
I think I will
  