import {
    Badge,
    Box,
    Button,
    Flex,
    GridItem,
    Heading,
    Image,
    Stack,
    Text
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { ReactElement } from 'react';
import { StrapiArticle } from '../types';
import { BiRightArrowAlt } from 'react-icons/bi';
export interface ArticleCardProps {
    article: StrapiArticle;
}

export default function ArticleCard({
    article
}: ArticleCardProps): ReactElement {
    return (
        <Box
            as="article"
            rounded="20px"
            overflow="hidden"
            lineHeight={1.5}
            shadow="2xl"
        >
            <Box display="block" w="100%">
                <Img
                    style={{ height: '100%', width: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={article.image?.childImageSharp?.fluid}
                    size="100%"
                />
            </Box>

            <Box p={5}>
                <Stack isInline justify="space-between" align="baseline">
                    <Badge variant="solid" rounded="full" px={2}>
                        {article.category?.name}
                    </Badge>
                    <Text
                        textTransform="uppercase"
                        fontSize="sm"
                        letterSpacing="wide"
                    >
                        {format(new Date(article.publishedAt), 'MMM dd, yyyy')}
                    </Text>
                </Stack>

                <Box py={2}>
                    <Heading as="h6" size="md">
                        {article.title}
                    </Heading>
                </Box>

                <Stack isInline justify="flex-end" align="baseline">
                    <Link to={`article/${article.slug}`}>Read More...</Link>
                </Stack>
            </Box>
        </Box>
    );
}
