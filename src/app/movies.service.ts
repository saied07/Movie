import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _Httpclient:HttpClient) { }
  getMovies(pageNumber):Observable<any>{
    return this._Httpclient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=fc7f9370b9acd3dac04dc70420fd54cd&fbclid=IwAR0Lhdtmph-XUkSxid84m-YNeBVp2w85YNp9zimH02kFXav7O--3x6nw158&page='+pageNumber);
  }
  getTrendingMovies(pageNumber):Observable<any>{
    return this._Httpclient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=fc7f9370b9acd3dac04dc70420fd54cd&page='+pageNumber);
  }
  getPopularMovies(pageNumber):Observable<any>{
    return this._Httpclient.get('https://api.themoviedb.org/3/movie/popular?api_key=fc7f9370b9acd3dac04dc70420fd54cd&language=en-US&page='+pageNumber);
  }
  getUpcomingMovies(pageNumber):Observable<any>{
    return this._Httpclient.get("https://api.themoviedb.org/3/movie/upcoming?api_key=fc7f9370b9acd3dac04dc70420fd54cd&language=en-US&page="+pageNumber);
  }
  getTopRatedMovies(pageNumber):Observable<any>{
    return this._Httpclient.get('https://api.themoviedb.org/3/movie/top_rated?api_key=fc7f9370b9acd3dac04dc70420fd54cd&language=en-US&page='+pageNumber);
  }
  getMoviesVideo(movieid):Observable<any>{
    return this._Httpclient.get('https://api.themoviedb.org/3/movie/'+movieid+'/videos?api_key=fc7f9370b9acd3dac04dc70420fd54cd&language=en-US')
  }
  getMovieDetails(movieid):Observable<any>{
    return this._Httpclient.get("https://api.themoviedb.org/3/movie/"+movieid+"?api_key=fc7f9370b9acd3dac04dc70420fd54cd&language=en-US")
  }
  getSimilarMovies(movieid):Observable<any>{
    return this._Httpclient.get("https://api.themoviedb.org/3/movie/"+movieid+"/similar?api_key=fc7f9370b9acd3dac04dc70420fd54cd&language=en-US&page=1")
  }
}
