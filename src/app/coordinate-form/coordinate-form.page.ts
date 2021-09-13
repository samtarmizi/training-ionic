import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coordinate-form',
  templateUrl: './coordinate-form.page.html',
  styleUrls: ['./coordinate-form.page.scss'],
})
export class CoordinateFormPage implements OnInit {

  constructor(public api: ApiService, public router: Router) { }

  request: any;
  response:any;

  ngOnInit() {
    this.request = {
      name: null,
      latitude: null,
      longitude: null
    }
  }

  submitForm(){
    console.log('Button clicked');
    console.log(this.request);

    this.api.storeCoordinate(this.request).then((data:any) => {
      console.log(data);
      this.response = data;

      this.router.navigate(['/coordinate-list']);
    });

  }

}
