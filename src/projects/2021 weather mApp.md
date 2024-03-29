---
title: Weather mApp
date: 2021-07-17T22:00:00.000Z
tags:
  - post
logos:
  - logo_title: Node.js
    src: /assets/nodejs.svg
  - logo_title: Heroku
    src: /assets/heroku-icon.svg
  - logo_title: PostgreSQL
    src: /assets/postgresql.svg
imageBlob: /assets/snow.png
sourceCode: https://github.com/J-Filip/map_weather
video: /assets/weather_mapp.mp4
image: /assets/blue-blob.svg
rotate: rotate(60)
description: Find out Your geolocation and get weather and air quality data for
  the location. You can also see where others have checked in on the map.
---
**🔗 [Live site](https://map-weather-app.herokuapp.com)**

\
\
**WHY?**

My first dive into Node.js and backend development. The point wasn't to make another weather app but to learn to deal with APIs and fetching data. I built a modified project based on a tutorial by @joeyklee.
\
\
**WHAT?**

I set up a server using the express framework and used JavaScript Fetch API to get data from two APIs - weather and air quality. One of them required an API key so I learned how to store private API keys using environment variables. Also, I deployed my web app to the Heroku cloud platform with GitHub integration.
\
\
**HOW?**
What's really happening behind all this? When the app is loaded, the user is asked for permission to use his geolocation. If geolocation is available, the user can type in his nickname and press the Check-in button that sends POST requests to the server with variables latitude and longitude. The server fetches weather and air quality APIs with the user's coordinates and returns a response to the client. We make DOM changes with this data and send another POST request to the server with data to be stored in the database.

When "All Logs" is clicked, the client sends a GET request to the server asking for the last 20 rows from the database. For each entry from the database, we create a DIV element and add a marker with a pop-up to a Leaflet map. When "Croatia logs" is clicked, the same process is happening with the Postgres database but in this case, we SEND the user's country as a route parameter to an endpoint, where we return only database rows where the Country value is HR.

- - -

**CONCLUSION**
Even though my app did not win any design or originality awards (the why still eludes me), it shed a lot more light on APIs and why and how they are used. After finishing it, I felt a lot more comfortable approaching other APIs. It opened a whole new set of ideas that seemed a lot more advanced than they actually are. In my next project, I am using two approaches in dealing with APIs - WordPress REST API from our knowledge base (read more) and STRAPI - an API-driven headless CMS. \

\
***UPDATE 10/2022*** -  if you see this, please remind to find a new place to host my app since Heroku is no longer free starting November 28th. You get a high five!\
***UPDATE 07/2021*** -  added PostgreSQL database.\
***UPDATE 08/2021*** - the looks really weren't important but I could not look at it. So I asked my friend to contribute with his super-mediocre front-end skills - and he made it watchable. Thank You [@Brnjak6](https://github.com/Brnjak6).