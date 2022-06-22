const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const postcssrc = require('postcss-load-config');
const postcss = require("postcss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addExtension("css", {
        outputFileExtension: "css",
        compile: async (content) => {
            return async () => {
                const config = await postcssrc({})
                const result = postcss(config.plugins).process(content, config.options)
                return result.css
            }
        }
    })
    return {
        dir: {
            input: 'src',
            includes: 'includes',
            data: 'data'
        },
        passthroughFileCopy: true,
        templateFormats: ['html', 'njk', 'md', 'css'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    }
}