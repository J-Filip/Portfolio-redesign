---
title: Weather mApp
date: 2021-07-17T22:00:00.000Z
tags:
  - post
logos:
  - logo_title: Node.js
    src: /assets/projects/nodejs.svg
  - logo_title: Heroku
    src: /assets/projects/heroku-icon.svg
  - logo_title: PostgreSQL
    src: /assets/projects/postgresql.svg
imageBlob: /assets/snow.png
video: /assets/weather_mapp.mp4
image: /assets/blue-blob.svg
rotate: rotate(60)
description: Find out Your geolocation and get weather and air quality data for
  the location. You can also see where others have checked-in on the map.
---


__WHY?__

My first dive into Node.js and backend development. The point wasn't to make another weather app but to learn to deal with APIs and fetching data. I built a modified project based on a tutorial by @joeyklee. 
\
\
__WHAT?__

I set up a server using express framework and used JavaScript Fetch API to get data from two APIs - weather and air quality. One of them required API key so I learned how to store private API keys using environment variables. Also, I deployed my web app to Heroku cloud platform with GitHub integration.
\
\
__HOW?__
What's really happening behind all this? When app is loaded, user is asked for permission to use his geolocation. If geolocation available, user can type in his nickname and press Check-in button that sends POST request to server with variables latitude and longitude. Server fetches weather and airquality APIs with user's coordinates and returns a response to the client. We make DOM changes with this data and send another POST request to server with data to be stored in the database. 

When "All Logs" is clicked, client sends GET request to server asking for the last 20 rows from the database. For each entry from database we create a DIV element and add a marker with a pop-up to a Leaflet map. When "Croatia logs" is clicked, same process is happening with postgres database but in this case we SEND user's country as route parameter to an endpoint, where we return only database rows where Country value is HR.

---
__CONCLUSION__
Even though my app did not won any design or originality awards (the why still eludes me), it shed a lot more light on API's and why and how they are used. After finishing it, I felt a lot more comfortable approaching other API's. It opened a whole new set of ideas that seemed a lot more advanced then they actually are. 
In my next project, I am using two approaches in dealing with API's - WordPress REST API from our knowledge base (read more) and STRAPI - an API driven headless CMS.
\
\
**_UPDATE 07/2021_** -  added PostgreSQL database 
\
**_UPDATE 08/2021_** -  the looks really weren't important but I could not look at it. So I asked my friend to contribute with his super-mediocre front-end skills - and he made it watchable.
Thanks @Brnjak6. [LINK]