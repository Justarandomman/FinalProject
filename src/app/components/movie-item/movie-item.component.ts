import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
  }

}
