import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private newsService: NewsService) {
    this.activatedRoute.paramMap.subscribe( value => {
      const articleId = Number(value.get('articleId'));
      this.article = this.newsService.getArticleById(articleId);
      if (!this.article) {
        router.navigate(['error']);
      }
    });
  }

  ngOnInit() {
  }

}
