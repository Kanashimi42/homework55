import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Album } from './albut';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  
  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getDataRx(): Observable<Album[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums').pipe(
      map((data: any[]) => {
        console.log('Response before transformation:', data);
        return data.map(album => new Album(album.id, album.title));
      })
    );
  }
}
