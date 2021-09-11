import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.page.html',
  styleUrls: ['./post-comment.page.scss'],
})
export class PostCommentPage implements OnInit {

  constructor(public api: ApiService, public activatedRoute: ActivatedRoute) { }
  response:any;

  ngOnInit() {
    this.list();
  }

  list(){

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getPostComments(id).then((data:any) => {
      console.log(data);
      this.response = data;
    });
  }

}
