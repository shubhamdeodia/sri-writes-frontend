/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import SEO from '../components/seo';
import renderers from '../markdown-renderers/markdown-renderers';
import { StrapiArticle } from '../types';

// @ts-ignore
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
interface ArticleProps {
    data: {
        strapiArticle: StrapiArticle;
    };
}

export const query = graphql`
    query ArticleQuery($slug: String!) {
        strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
            strapiId
            title
            description
            content
            keywords
            publishedAt
            image {
                publicURL
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            author {
                name
                picture {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`;

const Article: React.FC<ArticleProps> = ({ data }) => {
    const article = data.strapiArticle;

    return (
        <>
            <SEO
                title={article.title}
                description={article.description}
                shareImage={article.image?.publicURL}
                author={data.strapiArticle.author?.name || 'Srinivas Laxman'}
            />
            <Flex
                align="center"
                justify={{
                    base: 'center',
                    md: 'space-around',
                    xl: 'space-between'
                }}
                direction={{ base: 'column-reverse', md: 'row' }}
                wrap="nowrap"
                maxH="70vh"
                px={8}
                mb={16}
            >
                <Stack
                    spacing={4}
                    w={{ base: '80%', md: '40%' }}
                    align={['center', 'center', 'flex-start', 'flex-start']}
                >
                    <Heading
                        as="h1"
                        size="xl"
                        fontWeight="bold"
                        textAlign={['center', 'center', 'left', 'left']}
                    >
                        {article.title}
                    </Heading>
                </Stack>
                <Box
                    w={{ base: '90%', sm: '80%', md: '70%' }}
                    mb={{ base: 12, md: 0 }}
                >
                    <Image
                        src={article.image?.publicURL || 'no-image'}
                        size="100%"
                        rounded="1rem"
                        shadow="2xl"
                    />
                </Box>
            </Flex>
            <Stack
                spacing={4}
                align={['center', 'center', 'flex-start', 'flex-start']}
            >
                <Heading
                    as="h2"
                    size="xl"
                    fontWeight="bold"
                    textAlign={['center', 'center', 'left', 'left']}
                >
                    {article.description}
                </Heading>
            </Stack>
            <ReactMarkdown
                source={article.content || 'no-content'}
                renderers={ChakraUIRenderer(renderers())}
                escapeHtml={false}
            />
        </>
    );
};

export default Article;
