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
                textAlign={['center', 'center', 'left', 'left']}
                p="32px"
                h="auto"
                fontSize={['md', 'md', 'lg', 'xl']}
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
