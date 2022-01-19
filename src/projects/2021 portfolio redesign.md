---
sourceImage: /assets/github.svg
logos:
  - logo_title: 11ty
    src: /assets/projects/11ty.svg
  - logo_title: Bulma
    src: /assets/projects/bulma.svg
  - logo_title: Netlify CMS
    src: /assets/projects/netlify.svg
sourceCode: https://github.com/J-Filip/Portfolio-redesign
title: Portfolio redesign
date: 2021-11-30T23:00:00.000Z
imageBlob: /assets/draw.jpg
tags:
  - post
image: /assets/projects/red-flame.png
rotate: rotate(-6)
description: Entering 2022. with a new portfolio. My first web portfolio 2021.
  was a basic b***h site and updating it got tedious. This year I wanted
  something cooler - a Jamstack website!
---
__WHY?__
- While it wasn't all that bad, 🔗[my former web portfolio](https://j-filip.github.io/my_resume/) was all html and css. I followed a YouTube tutorial (changed a lot of things of course) and build it so I had some place to show my projects. As more and more projects got finished or updated, I realized this wasn't the developer experience I wanted. I had to rebuild it in a way I could update the content with ease.  

\
\
__WHAT?__

- Having no idea about terms like SSG, headless CMS or jamstack I got cuorius. After reading about them I immediately knew I would have to read about it for another 17 times to get it. That process took some time but it started to make sense. I decided to go with Eleventy as a simple all-javascript SSG. For content management (for example writing this), I decided to go with Netlify CMS as it seemed very user-friendly. 

As in one of my previous projects, all code is pushed to a GitHub repo and then linked to Netlify so each time I push changes to the remote repo, Netlify runs a build and deployes the site. 
\
\
__HOW?__

SSG 11ty uses layouts - special templates used to wrap other content. For example, I created a base.njk file that contains "the base" for all other pages to use. Another cool thing about an SSG  is using collections for grouping content. In my example, projects are a collection of markdown files, with each one sharing a template but having a diffrent front matter data. 
\
Using a headless Netlify CMS we can manage content without touching the code. Even though I'm comfortable with code, this is a great and simple solution for seperating the front end from tthe content managment. The interface is user 

---
__CONCLUSION__

Jamstack architecture allows me to build a statically-served website and still get the benefits of a CMS. After finishing this project, I understand when it could be a good idea to go Jamstack. I must admit that the developer experience is much smoother then writing html and css only but I can't say I am still comfortable using the full power of SSG. 

Honestly, my first wish was to build this portfolio with SvelteKit but I am still waiting for it to hit the 1.0 version (go Rich!).  
