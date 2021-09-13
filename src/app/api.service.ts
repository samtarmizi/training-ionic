import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCoordinates(){
    let url = 'https://api.staging.tarsoft.co/api/coordinates';

    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((response) => {
        resolve(response);
      }, error => {
        reject(error);
      })
    });
  }

  getTodoList(){

    let url = 'https://jsonplaceholder.typicode.com/todos';

    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((response) => {
        resolve(response);
      }, error => {
        reject(error);
      })
    });
  }

  getPostList(){

    let url = 'https://jsonplaceholder.typicode.com/posts';

    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((response) => {
        resolve(response);
      }, error => {
        reject(error);
      })
    });
  }

  getPostComments(id: any){

    let url = 'https://jsonplaceholder.typicode.com/posts/' + id + '/comments';

    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((response) => {
        resolve(response);
      }, error => {
        reject(error);
      })
    });
  }

  storeCoordinate(request: any){

    let url = 'https://api.staging.tarsoft.co/api/coordinates/create';

    var body = new FormData();
    body.append("name", request.name);
    body.append("latitude", request.latitude);
    body.append("longitude", request.longitude);

    return new Promise((resolve, reject) => {
      this.http.post(url, body).subscribe((response) => {
        resolve(response);
      }, error => {
        reject(error);
      })
    });
  }

}
