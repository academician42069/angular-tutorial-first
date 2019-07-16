import { NewsComponent } from './news.component';
import { NewsService } from '../news.service';

describe('Testing News Component', () => {
    const newsService = new NewsService();
    const newsComponent = new NewsComponent(newsService);

    it('Articles getter should properly invoke the service function', () => {
        expect(newsComponent.articles).toBe(newsService.getArticles());
    });
});
