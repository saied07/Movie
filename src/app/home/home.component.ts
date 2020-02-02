import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  movies:object[];
  pageNumber:number[]=[];
  items = [];
  pageOfItems: Array<any>;
  searchText;
  currentpage=1;
  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getMovies(this.currentpage).subscribe(response=>{
      this.movies=response.results;
      for(let i=1;i<=response.total_pages;i++){
        this.pageNumber.push(i);
      }
      this.pageOfItems=this.movies;
    })
   }
   onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
}
  //  changePage(index){
  //    this.currentpage=index;
  //    console.log(this.currentpage);
  //   this._MoviesService.getMovies(index).subscribe((response)=>{
  //     this.movies=response.results;
  //   })
  //  }
  //  prev(){
  //    this.changePage(this.currentpage-1);
  //  }
  //  next(){
  //   this.changePage(this.currentpage+1);
  //  }
  ngOnInit() {
  }

}
