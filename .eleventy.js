module.exports = function(eleventyConfig) {
    // assets we want to passt hrough
    
eleventyConfig.addPassthroughCopy('./src/main.css');
eleventyConfig.addPassthroughCopy('./src/lib/main.js');

    return {
      dir: {
        input: "src",
        output: "_site"
      }
    }
  };