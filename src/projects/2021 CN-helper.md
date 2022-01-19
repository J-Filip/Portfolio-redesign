---
figcaption: Fig.1 - Stats show that August 25 holds the record with 83 users.
  Extension is actively used with some dips in usage during the summer.
title: CN Helper
date: 2021-05-05T22:00:00.000Z
tags:
  - post
  - featured
logos:
  - src: /assets/projects/javascript.svg
    logo_title: JavaScript
image2: /assets/cn-helper-stats.png
imageBlob: /assets/cn1.png
image: /assets/projects/blue-flame.png
rotate: rotate(0)
description: A simple app for boosting productivity for Helpdesk agents. It
  provides better UX with visual cues, autocomplete options and school search
  via pop-up.
---

---
__WHY?__
After 2 years of working as a Helpdesk agent, I started to notice a lot of tedious and unproductive steps that agents did every day during their shift. This included clicking, scrolling, opening new tabs and other. So I wanted to eliminate that.
\
\
__WHAT?__
While my first app [MejloMlat] tried something simmilar, I needed to find a way to make it more accessible so agents don't have to install it every time they change computers. Knowing all of us are logged in using our Google accounts, I decided to try and build a new Chrome extension that can be installed in only a few clicks.
\
\
__HOW?__
The basic principle is this: script is executed depending on the curently opened page in the browser. Event listeners are used to react to agent's predictable actions. It mostly uses DOM manipulation to change the look of the page by inserting extra elements or presenting it in a more user-friendly way. 
Most common features: autofill, extra dropdowns, filters, copy buttons...
It's mostly written in vanilla JavaScript while there are parts written in up-and-coming Svelte. (Tokenator and extension's pop-up)

---
__CONCLUSION__
The extension is now used by majority of Helpdesk (Fig.1), and agents give valuable feedback that helps me improve the extension. My goal is to make it even more robust by integrating it with more apps and to provide richer features. The project has 50 closed issues and over 10 releases. 
\
\
**_UPDATE 10/2021_** -  Most notable upgrade is called "Tokenator" (read more about it 🔗).
