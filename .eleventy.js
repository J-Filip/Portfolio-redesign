const { DateTime } = require("luxon");


module.exports = function(eleventyConfig) {
    // assets we want to passt hrough
    
eleventyConfig.addPassthroughCopy('./src/main.css');
eleventyConfig.addPassthroughCopy('./src/lib/main.js');
eleventyConfig.addPassthroughCopy('./src/assets');


eleventyConfig.addFilter('postDate', (dateObj) =>{
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
});

eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
      dir: {
        input: "src",
        output: "_site"
      }
    }
  };