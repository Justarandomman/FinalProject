import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movieUrl:string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=0b083e72e2a0ccaf4dbe0ba6b0d36741&language=en-US&page=1';

  constructor(private http:HttpClient) { 

  }

  
  getMovies() {
    return this.http.get<any>(this.movieUrl);
  }
}

