import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StrapiArticleConnection, StrapiHomepage } from '../types';
import Articles from '../components/Articles';
import Hero from '../components/Hero';
import usePagination from '../usePagination';
import { Flex } from '@chakra-ui/react';
import SEO from '../components/seo';
const initialPageIndex = 1;

const IndexPage = (): React.ReactElement => {
    const data = useStaticQuery(query);

    const strapiHomepage: StrapiHomepage = data.strapiHomepage;

    const allStrapiArticle: StrapiArticleConnection = data.allStrapiArticle;

    const [nextPage, previousPage, pageIndex, pageCount] = usePagination(
        allStrapiArticle.edges.length,
        6,
        initialPageIndex
    );

    console.log(`
    ██████╗ ███████╗██╗   ██╗              ███████╗██╗  ██╗██╗   ██╗██████╗ ██╗  ██╗ █████╗ ███╗   ███╗    ██████╗ ███████╗ ██████╗ ██████╗ ██╗ █████╗\n\
    ██╔══██╗██╔════╝██║   ██║              ██╔════╝██║  ██║██║   ██║██╔══██╗██║  ██║██╔══██╗████╗ ████║    ██╔══██╗██╔════╝██╔═══██╗██╔══██╗██║██╔══██╗\n\
    ██║  ██║█████╗  ██║   ██║    █████╗    ███████╗███████║██║   ██║██████╔╝███████║███████║██╔████╔██║    ██║  ██║█████╗  ██║   ██║██║  ██║██║███████║\n\
    ██║  ██║██╔══╝  ╚██╗ ██╔╝    ╚════╝    ╚════██║██╔══██║██║   ██║██╔══██╗██╔══██║██╔══██║██║╚██╔╝██║    ██║  ██║██╔══╝  ██║   ██║██║  ██║██║██╔══██║\n\
    ██████╔╝███████╗ ╚████╔╝               ███████║██║  ██║╚██████╔╝██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║    ██████╔╝███████╗╚██████╔╝██████╔╝██║██║  ██║\n\
    ╚═════╝ ╚══════╝  ╚═══╝                ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝    ╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═╝\n\
    `);
    return (
        <>
            <SEO
                title={strapiHomepage.seo?.metaTitle}
                description={strapiHomepage.seo?.metaDescription}
                shareImage={strapiHomepage.seo?.shareImage?.publicURL}
            />
            <Flex
                justify="center"
                direction="column"
                width="100%"
                flex="1 0 auto"
            >
                <Hero
                    title={strapiHomepage.hero?.title}
                    description={strapiHomepage.hero?.description}
                />
                <Articles
                    nextPage={nextPage}
                    previousPage={previousPage}
                    pageIndex={pageIndex}
                    pageCount={pageCount}
                    articles={allStrapiArticle.edges}
                />
            </Flex>
        </>
    );
};

const query = graphql`
    query {
        strapiHomepage {
            hero {
                title
                description
            }
            seo {
                metaTitle
                metaDescription
            }
        }
        allStrapiArticle(filter: { status: { eq: "published" } }) {
            edges {
                node {
                    strapiId
                    slug
                    title
                    publishedAt
                    category {
                        name
                    }
                    image {
                        childImageSharp {
                            fluid(maxWidth: 1200) {
                                ...GatsbyImageSharpFluid
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
        }
    }
`;

export default IndexPage;
