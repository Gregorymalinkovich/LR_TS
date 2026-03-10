import AppLoader from './appLoader.js';
import { IArticle, ISource, IApiResponse } from '../../types.js';
declare class AppController extends AppLoader {
    getSources(callback: (data: IApiResponse<ISource[]>) => void): void;
    getNews(e: Event, callback: (data: IApiResponse<IArticle[]>) => void): void;
}
export default AppController;
//# sourceMappingURL=controller.d.ts.map