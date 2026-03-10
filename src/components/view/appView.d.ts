import { IApiResponse, IArticle, ISource } from '../../types.js';
export declare class AppView {
    private news;
    private sources;
    constructor();
    drawNews(data: IApiResponse<IArticle[]>): void;
    drawSources(data: IApiResponse<ISource[]>): void;
}
export default AppView;
//# sourceMappingURL=appView.d.ts.map