import { IApiResponse, Options } from '../../types.js';
declare class Loader {
    private baseLink;
    private options;
    constructor(baseLink: string, options: Options);
    getResp<T>({ endpoint, options }: {
        endpoint: string;
        options?: Options;
    }, callback?: (data: IApiResponse<T>) => void): void;
    private errorHandler;
    private makeUrl;
    private load;
}
export default Loader;
//# sourceMappingURL=loader.d.ts.map