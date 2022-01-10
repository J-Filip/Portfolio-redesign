---
title: MejloMlat
date: 2020-11-20 
tags:
  - post
  - ahk
  - javascript
logos:
  - src: /assets/projects/ahk.svg
    logo_title: AutoHotkey
  - src: /assets/projects/javascript.svg
    logo_title: JavaScript
rotate: rotate(41)
imageBlob: /assets/steps.png
video: /assets/mejloMlat.mp4
list:
  - a
  - b
description: My first solo project. GUI mail composer & webscraper. Made for job purposes. Looks ancient.
---
__MAIL COMPOSER__

__WHY?__
As a Help Desk Agent huge part of our job is written communication via mail. Most of our mails have the same structure and many answers repeat over time, so we all use notepad and have some .txt file where we keep all of this. Agents constantly use copy-paste or write the same responses repeteadly that results with slower repsonse time and response typos. 

__WHAT?__
My idea was to build a mail composer with all the most common answers built in and ready to compose into final mail. This saves time for agents especially since they don't depend on their own files when changing workstation. It also removes the need for constant copy-pasting and ensures no typos.
\
\
__WEB SCRAPER__

__WHY?__
We use data from diffrent system and apps and we often have to filter it to get the information we want. Then we have to perform certain tasks depending on the status of the data collected. This includes monitoring a lot of open tabs and windows waiting for changes.

__WHAT?__
Why not do the searching and monitoring automatically if we know how the data is structured? So I came up with a web scraper that searches for specific data and presents it in a more useful way.  
\
\
__HOW?__
I used AHK and JavaScript to build a GUI with two parts:
- Mail Composer for inserting diffrent parts of mail using form elements. Mail can then be copied to a new tab which checks grammar (ispravi.me), formatted and copied to clipboard for further use.
- Web Scraper injects JavaScript code via Chrome debug mode and performs actions or returns wanted data. It uses vanilla JavaScript for DOM scraping (no libraries). 
Examples of scraping: agents currently working, number of incoming calls, on-hold time.

---
__CONCLUSION__
This was my first project ~~and it's still in development.~~ If other agents show interest I intend to add more answers in the mail composer part and communication with more apps. Also, I would like to write it another languge and get it online for easier access.
\
\
**_UPDATE 2021_** - NO, NO's - lot of data was hardcoded, all changes were not easily implemented, it was not tested on diffrent machines.

I started to learn JavaScript so I created a Chrome Extension instead, for better user and developer experience!