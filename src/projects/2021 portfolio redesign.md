---
sourceImage: /assets/github.svg
title: Portfolio redesign
date: 2021-11-30T23:00:00.000Z
tags:
  - post
  - featured
logos:
  - logo_title: 11ty
    src: /assets/11ty.svg
  - logo_title: Bulma
    src: /assets/bulma.svg
  - logo_title: Netlify CMS
    src: /assets/netlify.svg
  - logo_title: Shuffle
    src: /assets/shuffle.png
imageBlob: /assets/draw.jpg
sourceCode: https://github.com/J-Filip/Portfolio-redesign
image: /assets/red-flame.png
rotate: rotate(-26)
description: Entering 2022. with a new portfolio. My first web portfolio in
  2021. was a basic b**ch site and updating it got tedious. This year I wanted
  something cooler - a Jamstack website!
---
__WHY?__
- While it wasn't all that bad, 🔗[my former web portfolio](https://j-filip.github.io/my_resume/) was all HTML and CSS. I followed a YouTube tutorial (changed a lot of things of course) and build it so I had someplace to show my projects. As more and more projects got finished or updated, I realized this wasn't the developer experience I wanted. I had to rebuild it in a way I could update the content with ease.

\
\
__WHAT?__

- Having no idea about terms like SSG, headless CMS or Jamstack I got curious. After reading about them I immediately knew I would have to read about it another 17 times to get it. That process took some time but it started to make sense. I decided to go with Eleventy as a simple all-javascript SSG. For content management (for example, writing this), I decided to go with Netlify CMS as it seemed very user-friendly.

As in one of my previous projects, all code is pushed to a GitHub repo and then linked to Netlify so each time I push changes to the remote repo, Netlify runs a build and deploys the site.
\
\
__HOW?__

SSG 11ty uses layouts - special templates used to wrap other content. For example, I created a base.njk file that contains "the base" for all other pages to use. Another cool thing about an SSG  is using collections for grouping content. In my example, projects are a collection of markdown files, with each one sharing a template but having different front matter data.
\
Using a headless Netlify CMS we can manage content without touching the code. Even though I'm comfortable with code, this is a great and simple solution for separating the front end from the content management. The interface is user-friendly and it can be a great solution for non-tech-savvy users.
\
I used Shuffle editor for the design. I went with the more casual approach as I feel this represents the real me. Big letters, emoticons, flying blobs, and goofy descriptions beacause...why not? If You want to get straight down to business, You can always just download my CV or look into my LinkedIn and GitHub profiles.

---
__CONCLUSION__

Jamstack architecture allows me to build a statically-served website and still get the benefits of a CMS. After finishing this project, I understand when it could be a good idea to go Jamstack. I must admit that the developer experience is much smoother then writing HTML and CSS only but I can't say I am still comfortable using the full power of SSG.

Honestly, my first wish was to build this portfolio with SvelteKit but I am still waiting for it to hit the 1.0 version (go Rich!).
