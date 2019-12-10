import { Component, OnInit, Input } from '@angular/core';
import { Tvshow } from 'src/app/models/Tvshow';

import { TvshowsService } from '../../services/tvshows.service';


@Component({
  selector: 'app-tvshow-item',
  templateUrl: './tvshow-item.component.html',
  styleUrls: ['./tvshow-item.component.css']
})
export class TvshowItemComponent implements OnInit {
  @Input() tvshow: Tvshow;

  constructor(private tvshowsService:TvshowsService) { }

  ngOnInit() {
  }

}
