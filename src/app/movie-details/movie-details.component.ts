import { Component, OnInit} from '@angular/core';
import {MoviesService} from '../movies.service';
import {ActivatedRoute,Router} from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  safeSrc: SafeResourceUrl;
  movie_id:any;
  movieDetails:any;
  movievideo:object[]=[];
  similarMovies:object[]=[];
  safeURL;
  constructor(_MoviesServie:MoviesService,public _route:ActivatedRoute,private sanitizer: DomSanitizer,public _router:Router) {
    this.movie_id=this._route.snapshot.paramMap.get('id');
    _MoviesServie.getMovieDetails(this.movie_id).subscribe(data=>{
      this.movieDetails=data
      
    });
    _MoviesServie.getMoviesVideo(this.movie_id).subscribe(data=>{
      this.movievideo=data.results[0].key;
      console.log(this.movievideo)
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.movievideo);
    })
    _MoviesServie.getSimilarMovies(this.movie_id).subscribe(data=>{
      this.similarMovies=data.results;
    })
    //to make the component reload
    this._router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
  }  
   }


  
  ngOnInit() {
  }

}
