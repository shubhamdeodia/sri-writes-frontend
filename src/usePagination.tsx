import React, { useState } from 'react';

type pageIndex = number;
type pageCount = number;
type previousPage = () => undefined | void;
type nextPage = () => undefined | void;

function usePagination(
    totalNumberOfArticles: number,
    pageSize: number,
    initialPageIndex: number
): [nextPage, previousPage, pageIndex, pageCount] {
    const [pageIndex, setPageIndex] = useState(initialPageIndex);

    const pageCount: number = Math.ceil(totalNumberOfArticles / pageSize);

    const nextPage = (): undefined | void => {
        if (pageIndex === pageCount) return;
        setPageIndex(pageIndex + 1);
    };

    const previousPage = (): undefined | void => {
        if (pageIndex === 1) return;
        setPageIndex(pageIndex - 1);
    };

    return [nextPage, previousPage, pageIndex, pageCount];
}

export default usePagination;
