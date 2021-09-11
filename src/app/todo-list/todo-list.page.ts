import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

  constructor(public api: ApiService) { }

  response:any;

  ngOnInit() {
    this.list();
  }


  list(){
    this.api.getTodoList().then((data:any) => {
      console.log(data);
      this.response = data;
    });
  }

}
