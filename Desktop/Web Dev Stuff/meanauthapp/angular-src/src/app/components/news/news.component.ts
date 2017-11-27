import { Component, OnInit } from '@angular/core';
import { POSTS } from '../../mock-posts';
import { Post } from '../../post'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  posts = POSTS

  constructor() { }

  ngOnInit() {
  }

}
