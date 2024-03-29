---
figcaption: Fig.1 - Stats show that August 25 holds the record with 83 users.
  Extension is actively used with some dips in usage during the summer.
title: CN Helper
date: 2021-05-05T22:00:00.000Z
tags:
  - post
logos:
  - src: /assets/javascript.svg
    logo_title: JavaScript
  - logo_title: Webpack
    src: /assets/webpack.svg
sourceCode: ""
image2: /assets/cn-helper-stats.png
imageBlob: /assets/cn1.png
image: /assets/blue-flame.png
rotate: rotate(0)
description: A chrome extension for boosting productivity for Helpdesk agents.
  It provides better UX with visual cues, autocomplete options, and school
  search via pop-up.
---
- - -

**WHY?**
After 2 years of working as a Helpdesk agent, I started to notice a lot of tedious and unproductive steps that agents did every day during their shift. This included clicking, scrolling, opening new tabs, and other steps. So I wanted to eliminate that.
\
\
**WHAT?**
While my first app [MejloMlat](https://11ty-bulma-netlifycms.netlify.app/projects/2020%20mejlomlat/) tried something similar, I needed to find a way to make it more accessible so agents don't have to install it every time they change computers. Knowing all of us are logged in using our Google accounts, I decided to try and build a new Chrome extension that can be installed in only a few clicks.
\
\
**HOW?**
The basic principle is this: the script is executed depending on the currently opened page in the browser. It uses event listeners that react to the agent's predictable actions. It mostly uses DOM manipulation to change the look of the page by inserting extra elements or presenting it in a more user-friendly way.
Most common features: autofill, extra dropdowns, filters, copy buttons...
It's mostly written in vanilla JavaScript while there are parts written in up-and-coming Svelte (Tokenator and extension's pop-up).

- - -

> **CONCLUSION**
> The extension is now used by the majority of the Helpdesk (Fig.1), and agents give valuable feedback that helps me improve the extension. My goal is to make it even more robust by integrating it with more apps and providing richer features.

***UPDATE 09/2022*** -  In process of migrating to manifest version 3.\
***UPDATE 08/2022*** -  Over **100** closed issues and **30** releases.\
***UPDATE 04/2022*** -  Set up **Webpack**.\
***UPDATE 03/2022*** -  The project is now private.\
***UPDATE 10/2021*** -  The most notable upgrade is called ["Tokenator"](https://filip-jugkala.com/2021%20tokenator/).