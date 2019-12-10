import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Tvshow } from '../models/Tvshow';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  tvshowUrl:string = 'https://api.themoviedb.org/3/tv/popular?api_key=0b083e72e2a0ccaf4dbe0ba6b0d36741&language=en-US&page=1';

  constructor(private http:HttpClient) { }

  getTvshows() {
    return this.http.get<any>(this.tvshowUrl);
  }
}
