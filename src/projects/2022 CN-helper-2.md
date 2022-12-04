---
title: CN Helper 2 (MailoMat)
date: 2022-02-01T23:00:00.000Z
tags:
  - post
  - featured
logos:
  - logo_title: Svelte
    src: /assets/projects/svelte.svg
  - logo_title: Bulma
    src: /assets/projects/bulma.svg
  - logo_title: WordPress
    src: /assets/projects/wordpress.svg
imageBlob: /assets/projects/spear.png
video: /assets/cn_helper_2.mkv
image: /assets/blue-blob.svg
rotate: rotate(-74)
description: A Svelte + WordPress as a headless cms project. Technically an
  improved version of my first project - MailoMlat.
---
- - -

**WHY?**
As this is an improved version of my first Helpdesk project, You can read about the **Why** in [MejloMlat.](https://filip-jugkala.com/projects/2020%20mejlomlat/)
\
\
**HOW?**
The most important improvement is decoupling the content from the presentation. As our business logic might change, it must be easily updated and not hardcoded as in my first approach.
At first, I tried using Strapi - a headless CMS. It seemed approachable, it was 100% Javascript and it was flexible. It wasn't easy but I managed to host it on Heroku and make it work. But a lot of it still looked like magic and I wasn't sure what I was doing most of the time.
I decided that as this was not a personal project, I will go with something more mature and familiar, and then it hit me - **WordPress REST API**.
As we use WordPress for our knowledge base, I realized we could use its great API and use it as a **headless CMS**. I created new custom fields tailored to our needs and populated them with our data.
All of the data is now consumed using API calls and the presentation is handled with **Svelte**. 

- - -

**CONCLUSION**
This app can now be used to quickly build an entire response out of predefined parts that are fetched using WordPress API. Body parts can be edited and you can add more of them. Those parts are defined by team leaders and can be customized with special keywords that represent variables in responses. 
Business logic changes are now easily implemented without touching the code, using a simple and intuitive WordPress dashboard.

\
***UPDATE 04/2022*** -  The project is now private.