import { NewsService } from './news.service';
import { dataBase } from './dbArticle';

describe('Testing News Service', () => {
    const newsService = new NewsService();

    it('getArticles should properly return the articles', () => {
        expect(newsService.getArticles().toString()).toEqual(dataBase.toString());
    });

    it('getArticleByID should return a proper article', () => {
        const id = dataBase[0].id;
        expect(newsService.getArticleById(id).toString()).toEqual(dataBase[0].toString());
    });

});
