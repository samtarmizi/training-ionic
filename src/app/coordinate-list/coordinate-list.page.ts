import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-coordinate-list',
  templateUrl: './coordinate-list.page.html',
  styleUrls: ['./coordinate-list.page.scss'],
})
export class CoordinateListPage implements OnInit {

  constructor(public api: ApiService) { }

  response:any;
  searchTerm:any;

  ngOnInit() {
    this.list();
  }

  list(){
    this.api.getCoordinates().then((data:any) => {
      console.log(data);
      this.response = data.data;
    });
  }


}
