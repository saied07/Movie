import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  topRated:object[];
  pageNumber:number[]=[];
  items = [];
  pageOfItems: Array<any>;
  searchText;
  currentindex=1;
  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getTopRatedMovies(this.currentindex).subscribe(data=>{
      this.topRated=data.results;
      for(let i=1;i<=data.total_pages;i++){
        this.pageNumber.push(i);
      }
      this.pageOfItems=this.topRated;

    })
   }
   onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
}
  //  changePage(index){
  //   this.currentindex=index;
  //   this._MoviesService.getTopRatedMovies(this.currentindex).subscribe(data=>{
  //     this.topRated=data.results;
  //   })
  // }
  // prev(){
  //   this.changePage(this.currentindex-1);
  // }
  // next(){
  //  this.changePage(this.currentindex+1);
  // }
  ngOnInit() {
  }

}
