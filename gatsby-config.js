module.exports = {
    siteMetadata: {
        title: `sri-writes`,
        description: `Srini Blog`,
        author: `@srinivas-laxman`
    },

    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: 'http://localhost:1337',
                queryLimit: 1000, // Default to 100
                contentTypes: ['article', 'category', 'writer'],
                //If using single types place them in this array.
                singleTypes: [`homepage`, `global`]
                // Possibility to login with a strapi user, when content types are not publically available (optional).
            }
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true // defaults to false
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        'gatsby-plugin-offline',
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `sri-writes`,
                short_name: `sri-writes`,
                start_url: `/`,
                display: `minimal-ui`,
                icon: `${__dirname}/src/images/gatsby-icon.png`
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: ['source sans pro:300,400,400i,700', 'Roboto Mono'],
                display: 'swap'
            }
        },
        {
            resolve: '@chakra-ui/gatsby-plugin',
            options: {
                /**
                 * @property {boolean} [isResettingCSS=true]
                 * if `false`, this plugin will not use `<CSSReset />
                 */
                isResettingCSS: true,
                /**
                 * @property {boolean} [isUsingColorMode=true]
                 * if `false`, this plugin will not use <ColorModeProvider />
                 */
                isUsingColorMode: true,
                /**
                 * @property {number} [portalZIndex=40]
                 * The z-index to apply to all portal nodes. This is useful
                 * if your app uses a lot z-index to position elements.
                 */
                portalZIndex: 40
            }
        },
        {
            resolve: 'gatsby-plugin-page-progress',
            options: {
                height: 3,
                prependToBody: true,
                color: '#0EBE6F'
            }
        }
    ]
};
