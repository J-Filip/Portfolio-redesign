const { DateTime } = require("luxon");


module.exports = function(eleventyConfig) {
    // assets we want to passt hrough

eleventyConfig.addPassthroughCopy('./src/main.css');
eleventyConfig.addPassthroughCopy('./src/lib/main.js');
eleventyConfig.addPassthroughCopy('./src/lib/bundle.js');
eleventyConfig.addPassthroughCopy('./src/assets');
eleventyConfig.addPassthroughCopy('./src/admin');


eleventyConfig.addFilter('postDate', (dateObj) =>{
  return DateTime.fromJSDate(dateObj).toFormat("LLL yyyy")
});

eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
      dir: {
        input: "src",
        output: "_site"
      }
    }
  };