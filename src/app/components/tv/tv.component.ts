import { Component, OnInit } from '@angular/core';
import { Tvshow } from '../../models/Tvshow';

import { TvshowsService } from '../../services/tvshows.service';
import { tvshowResults } from './tv';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
Tvshows:Tvshow[];
TvshowCurrent:Tvshow;
TvshowOutput:tvshowResults;
  constructor(private TvshowsService:TvshowsService) { }

  ngOnInit() {
    this.TvshowsService.getTvshows().subscribe(tvshows => {
      this.TvshowOutput = tvshows.results;
    });
    
  }

}
