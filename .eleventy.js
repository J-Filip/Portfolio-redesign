module.exports = function(eleventyConfig) {
    // Return your Object options:
eleventyConfig.addPassthroughCopy('./src/main.css');
eleventyConfig.addPassthroughCopy('./src/lib/main.js');

    return {
      dir: {
        input: "src",
        output: "_site"
      }
    }
  };