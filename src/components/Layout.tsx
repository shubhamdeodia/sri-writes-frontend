import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header';
import { Flex } from '@chakra-ui/react';
import Footer from './Footer';

const Layout = ({
    children
}: {
    children: React.ReactNode;
}): React.ReactElement => (
    <StaticQuery
        query={graphql`
            query {
                strapiHomepage {
                    seo {
                        metaTitle
                        metaDescription
                        shareImage {
                            publicURL
                        }
                    }
                }
            }
        `}
        render={() => (
            <Flex
                direction="column"
                align="center"
                p="32px"
                h={['auto', 'auto', '100%', '100%']}
                maxW="1140px"
                m="0 auto"
            >
                <Header />
                {children}
                <Footer />
            </Flex>
        )}
    />
);

export default Layout;
