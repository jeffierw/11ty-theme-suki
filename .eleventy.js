const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);
    return {
        dir: {
            input: 'src'
        },
        passthroughFileCopy: true,
        templateFormats: ['html', 'njk', 'md'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    }
}