---
title: CN Helper - Tokenator
date: 2021-09-04T22:00:00.000Z
tags:
  - post
  - featured
logos:
  - title: Svelte
    image: /assets/svelte.svg
    logo-title: JS
    src: /assets/projects/bulma.svg
    logo_title: Bulma
  - logo_title: Svelte
    src: /assets/projects/svelte.svg
imageBlob: /assets/cn2.png
video: /assets/tokenator.mkv
image: /assets/blue-blob.svg
description: An add-on for CN Helper chrome extension. It spits out canned
  responses. Very useful for generating responses that follow the same template.
---


__WHY?__

Part of our job requires sending "canned" responses (repeatedly sent mail based ona a template). We used an excel table for generating this responses;based on the selected sheet and cells filled. I wanted to find a quicker solution. 
\
\
__WHAT?__

The idea wast to have a GUI that would generate the response quicker, have better UX and it had to eliminate the number of copy&paste clicks. As we already use CN Helper[LINK], I could just implement this solution inside of it.
Beside that, it gave me a chance to try out Svelte - a new JavaScript compiler that really caught my eye - and this was the perfect opurtunity.
\
\
__HOW?__

Tokenator is a form with textarea as it's main element and other form elements where data is filled by the user or automatically. It uses Svelte's reactive declarations which "will automatically recompute logic that depends on state variables when Svelte state is updated". Everytime the value of form elements changes, the value of textarea changes.
As this response must be copied and pasted in another application, I had to make this transition easy as possible so they dont have to do any formatting in another application (notepad, for example).
When the user builds a response, they only have to click the "Format&Copy" button which formats and copies the text so it can be used immediately.
For styling I used CSS framework Bulma.

---
__CONCLUSION__

This add-on for CN Helper eliminated the need for the use of excel table, it sped up the entire process of building new canned responses and it significately reduced the chance of error. The application basically stayed the same to this day because it fulfills it's specific purpose - but another idea came to my mind and it's currently in the developement process.  
