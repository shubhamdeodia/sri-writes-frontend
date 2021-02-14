/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = (props) => {
    const { strapiGlobal } = useStaticQuery(query);
    const { defaultSeo, siteName, favicon } = strapiGlobal;

    // Merge default and page-specific SEO values
    const fullSeo = { ...defaultSeo, ...props };
    console.log('🚀 ~ SEO ~ fullSeo', fullSeo);
    const getMetaTags = () => {
        const tags = [];

        if (fullSeo.title || fullSeo.metaTitle) {
            tags.push(
                {
                    property: 'og:title',
                    content: fullSeo.title || fullSeo.metaTitle
                },
                {
                    name: 'twitter:title',
                    content: fullSeo.title || fullSeo.metaTitle
                }
            );
        }
        if (fullSeo.description || fullSeo.metaDescription) {
            tags.push(
                {
                    name: 'description',
                    content: fullSeo.description || fullSeo.metaDescription
                },
                {
                    property: 'og:description',
                    content: fullSeo.description || fullSeo.metaDescription
                },
                {
                    name: 'twitter:description',
                    content: fullSeo.description || fullSeo.metaDescription
                }
            );
        }
        if (fullSeo.author) {
            tags.push({
                name: 'twitter:creator',
                content: fullSeo.author
            });
        }
        if (fullSeo.shareImage) {
            const imageUrl =
                (process.env.GATSBY_ROOT_URL || 'http://localhost:8000') +
                fullSeo.shareImage.publicURL;
            tags.push(
                {
                    name: 'image',
                    content: imageUrl
                },
                {
                    property: 'og:image',
                    content: imageUrl
                },
                {
                    name: 'twitter:image',
                    content: imageUrl
                }
            );
        }
        if (fullSeo.article) {
            tags.push({
                property: 'og:type',
                content: 'article'
            });
        }
        tags.push({ name: 'twitter:card', content: 'summary_large_image' });
        tags.concat(
            fullSeo.metaKeywords && fullSeo.metaKeywords.length > 0
                ? { name: 'keywords', content: fullSeo.metaKeywords }
                : []
        );
        return tags;
    };

    const metaTags = getMetaTags();

    return (
        <Helmet
            title={fullSeo.title || fullSeo.metaTitle}
            titleTemplate={`%s | ${siteName}`}
            link={[
                {
                    rel: 'icon',
                    href: favicon.publicURL
                }
            ]}
            meta={metaTags}
        />
    );
};

export default SEO;

SEO.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    keywords: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool
};

SEO.defaultProps = {
    title: 'Homepage',
    description: 'I write about nature, tech and personal experiences',
    image: null,
    author: 'Srinivas Laxman',
    keywords: 'Srini Blog, AWS Architecht, Srinivas Laxman',
    article: false
};

const query = graphql`
    query {
        strapiGlobal {
            siteName
            favicon {
                publicURL
            }
            defaultSeo {
                metaTitle
                metaDescription
                shareImage {
                    publicURL
                }
            }
        }
    }
`;
