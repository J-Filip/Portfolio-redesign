---
title: CN Helper - Tokenator
date: 2021-09-04T22:00:00.000Z
tags:
  - post
logos:
  - title: Svelte
    image: /assets/svelte.svg
    logo-title: JS
    src: /assets/projects/bulma.svg
    logo_title: Bulma
  - logo_title: Svelte
    src: /assets/projects/svelte.svg
  - logo_title: Webpack
    src: /assets/projects/webpack.svg
imageBlob: /assets/cn2.png
sourceCode: ""
video: /assets/tokenator.mkv
image: /assets/blue-blob.svg
description: An add-on for CN Helper chrome extension. It spits out canned
  responses. Very useful for generating responses that follow the same template.
---
**WHY?**

Part of our job requires sending "canned" responses (repeatedly sent mail based on a template). We used an excel table for generating these responses based on the selected sheet and cells filled. I wanted to find a quicker solution. 
\
\
**WHAT?**

The idea was to have a GUI that would generate the response quicker, have better UX and it had to eliminate the number of copy&paste clicks. As we already use [CN Helper](https://github.com/J-Filip/CN_Helper), I could just implement this solution inside of it.
Besides that, it gave me a chance to try out Svelte - a new JavaScript compiler that really caught my eye - and this was the perfect opportunity.
\
\
**HOW?**

Tokenator is a form with textarea as its main element and other form elements where data is filled by the user or automatically. It uses Svelte's reactive declarations which "will automatically recompute logic that depends on state variables when Svelte state is updated". Every time the value of form elements changes, the value of textarea changes.
As this response must be copied and pasted in another application, I had to make this transition easy as possible so they don't have to do any formatting in another application (notepad, for example).
When the user builds a response, they only have to click the "Format&Copy" button which formats and copies the text so it can be used immediately.
For styling, I used the CSS framework Bulma.

- - -

**CONCLUSION**

This add-on for CN Helper eliminated the need for the use of an excel table, sped up the entire process of building new canned responses and significantly reduced the chance of error. The application basically stayed the same to this day because it fulfills its specific purpose - but another idea came to my mind and it's currently in the development process. 

***UPDATE 04/2022*** -  Set up webpack.\
***UPDATE 03/2022*** -  The project is now private.