import { Box, Flex, Grid, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { StrapiArticle } from '../types';
import ArticleCard from './ArticleCard';

export interface ArticleNode {
    node: StrapiArticle;
}

interface ArticlesProps {
    articles: Array<ArticleNode>;
    nextPage: () => undefined | void;
    previousPage: () => undefined | void;
    pageIndex: number;
    pageCount: number;
}

const LeftIcon = ({
    onClick,
    disabled
}: {
    onClick: () => void;
    disabled: boolean;
}) => (
    <IconButton
        size="lg"
        disabled={disabled}
        onClick={onClick}
        fontSize="lg"
        aria-label={'Previous Page'}
        variant="ghost"
        ml={{ base: '0', md: '3' }}
        icon={<FaArrowLeft />}
    />
);

const RightIcon = ({
    onClick,
    disabled
}: {
    onClick: () => void;
    disabled: boolean;
}) => (
    <IconButton
        disabled={disabled}
        size="lg"
        fontSize="lg"
        onClick={onClick}
        aria-label={'Nexr Page'}
        variant="ghost"
        ml={{ base: '0', md: '3' }}
        icon={<FaArrowRight />}
    />
);

const Articles: React.FC<ArticlesProps> = ({
    articles,
    nextPage,
    previousPage,
    pageIndex,
    pageCount
}): React.ReactElement => {
    return (
        <>
            <Flex w="100%" p="20px" justify="space-between">
                <LeftIcon disabled={pageIndex === 1} onClick={previousPage} />
                <RightIcon
                    disabled={pageIndex === pageCount}
                    onClick={nextPage}
                />
            </Flex>

            <Box maxW="100%" fontSize={['md', 'md', 'lg', 'lg']}>
                <Grid
                    templateColumns={[
                        '1fr',
                        '1fr 1fr',
                        '1fr 1fr',
                        '1fr 1fr 1fr'
                    ]}
                    gap="32px"
                >
                    {articles
                        .map((article) => {
                            return (
                                <ArticleCard
                                    key={article.node.strapiId}
                                    article={article.node}
                                ></ArticleCard>
                            );
                        })
                        .slice((pageIndex - 1) * 6, pageIndex * 6)}
                </Grid>
            </Box>
        </>
    );
};

export default Articles;
