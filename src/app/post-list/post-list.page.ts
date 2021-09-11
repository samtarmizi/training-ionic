import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.page.html',
  styleUrls: ['./post-list.page.scss'],
})
export class PostListPage implements OnInit {

  constructor(public api: ApiService) { }

  response: any;

  ngOnInit() {
    this.list();
  }

  list(){
    this.api.getPostList().then((data:any) => {
      console.log(data);
      this.response = data;
    });
  }

}
