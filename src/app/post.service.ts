import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<any> {
    const url = 'https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed';
    return this.http.get<any>(url);
}
}
