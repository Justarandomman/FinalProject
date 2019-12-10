import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvComponent } from './components/tv/tv.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { TvshowItemComponent } from './components/tvshow-item/tvshow-item.component';
import { NavComponent } from './components/nav/nav.component';

import { RouterModule } from "@angular/router";
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvComponent,
    MovieItemComponent,
    TvshowItemComponent,
    NavComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "home", component: HomepageComponent},
      {path: "movies", component: MoviesComponent},
      {path: "tvshows", component: TvComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
