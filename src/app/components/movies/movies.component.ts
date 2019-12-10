import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import { MoviesService } from '../../services/movies.service';
import { movieResults } from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
Movies:Movie[];
MovieOutput:movieResults;
  constructor(private MoviesService:MoviesService) { }

  ngOnInit() {
    this.MoviesService.getMovies().subscribe(movies =>{
      this.MovieOutput = movies.results;
    });
  }

}
