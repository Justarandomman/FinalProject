import { Component, OnInit } from '@angular/core';


import { MoviesService } from '../../services/movies.service';
import { movieResults } from '../movies/movie';

import { TvshowsService } from '../../services/tvshows.service';
import { tvshowResults } from '../tv/tv';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  movie:movieResults;
  tvshow:tvshowResults;

  constructor(private MoviesService:MoviesService, private TvshowsService:TvshowsService) { }

  ngOnInit() {
    this.MoviesService.getMovies().subscribe(movies =>{
      this.movie = movies.results[0];
    });

    this.TvshowsService.getTvshows().subscribe(tvshows => {
      this.tvshow = tvshows.results[0];
    });
  }

}
