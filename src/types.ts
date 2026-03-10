export interface IArticle {
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
    source: {
        id: string | null;
        name: string;
    };
}

export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface IApiResponse<T> {
    status: 'ok' | 'error';
    totalResults?: number;
    articles?: T; 
    sources?: T;
}

export type Options = {
    [key: string]: string;
};

export interface ILoaderOptions {
    apiKey: string;
}