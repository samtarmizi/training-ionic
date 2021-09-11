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
}
