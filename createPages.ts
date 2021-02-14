/* eslint-disable @typescript-eslint/no-explicit-any */
import { GatsbyNode } from 'gatsby';
import { StrapiArticleConnection, StrapiWriterConnection } from './src/types';

export const createPages: GatsbyNode['createPages'] = async ({
    graphql,
    actions
}) => {
    const { createPage } = actions;

    const result: any = await graphql(
        `
            {
                articles: allStrapiArticle {
                    edges {
                        node {
                            strapiId
                            slug
                        }
                    }
                }
            }
        `
    );

    const writersResult: any = await graphql(
        `
            {
                writers: allStrapiWriter {
                    edges {
                        node {
                            strapiId
                            slug
                        }
                    }
                }
            }
        `
    );

    if (result.errors) {
        throw result.errors;
    }

    // Create blog articles pages.
    const articles: StrapiArticleConnection = result.data.articles;

    const writers: StrapiWriterConnection = writersResult.data.writers;

    const ArticleTemplate = require.resolve('./src/templates/article');

    const WritersTemplate = require.resolve('./src/templates/writers');

    articles.edges.forEach((article) => {
        createPage({
            path: `/article/${article.node.slug}`,
            component: ArticleTemplate,
            context: {
                slug: article.node.slug
            }
        });
    });

    writers.edges.forEach((writer) => {
        createPage({
            path: `/writers/${writer.node.slug}`,
            component: WritersTemplate,
            context: {
                slug: writer.node.slug
            }
        });
    });
};
