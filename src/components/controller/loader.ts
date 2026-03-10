import { IApiResponse, Options } from '../../types.js';

class Loader {
    private baseLink: string;
    private options: Options;

    constructor(baseLink: string, options: Options) {
        // Если сюда прилетит undefined, мы сразу увидим это в консоли
        if (!baseLink) {
            console.error('CRITICAL ERROR: baseLink is undefined in Loader constructor!');
        }
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        { endpoint, options = {} }: { endpoint: string; options?: Options },
        callback: (data: IApiResponse<T>) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    private makeUrl(options: Options, endpoint: string): string {
        const urlOptions: Options = { ...this.options, ...options };
        
        // Здесь мы гарантируем, что ссылка начнется правильно
        const base = this.baseLink || 'https://newsapi.org/v2/';
        let url = `${base}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(
        method: string,
        endpoint: string,
        callback: (data: IApiResponse<T>) => void,
        options: Options = {}
    ): void {
        const finalUrl = this.makeUrl(options, endpoint);
        console.log('Fetching URL:', finalUrl); 

        fetch(finalUrl, { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: IApiResponse<T>) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;