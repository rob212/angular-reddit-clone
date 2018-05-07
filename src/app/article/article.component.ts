import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
// In Angular, a component host is the element this component is attached to. We can set properties
// on the host element by using the @HostBinding() decorator. In this case, we re asking Angular to
// keep the value of the host elements class (app-article element)to be in sync with the property cssClass, used by Semantic-UI
// css lass called row.
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {}

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

}
