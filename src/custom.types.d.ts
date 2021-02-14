import { FixedObject } from 'gatsby-image';

export interface ICategory {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    slug: string;
    articles(
        sort: string,
        limit: number,
        start: number,
        where: JSON
    ): [IArticle];
}

export interface IUploadFile {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: JSON;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: JSON;
    related(sort: string, limit: number, start: number, where: JSON): [any];
}

export interface IWriter {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    picture: IUploadFile;
    email: string;
    articles(
        sort: string,
        limit: number,
        start: number,
        where: JSON
    ): [IArticle];
}

export interface IArticle {
    id: number;
    created_at: Date;
    updated_at: Date;
    title: string;
    description: string;
    content: string;
    publishedAt: Date;
    status: ENUM_ARTICLE_STATUS;
    slug: string;
    category: ICategory;
    image: FixedObject;
    author: IWriter;
}

export enum ENUM_ARTICLE_STATUS {
    draft,
    published
}
