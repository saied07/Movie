import { Component, OnInit } from '@angular/core';
import  { MoviesService } from '../movies.service';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  trending:object[];
  pageNumber:number[]=[];
  searchText;
  items = [];
  pageOfItems: Array<any>;
  currentindex=1;
  constructor(private _MoviesService:MoviesService) { 
    _MoviesService.getTrendingMovies(this.currentindex).subscribe(data=>{
      this.trending=data.results;
      for(let i=1;i<=data.total_pages;i++){
        this.pageNumber.push(i);
      }
      this.pageOfItems=this.trending;
    })
  }
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
}
// changePage(index){
//   this.currentindex=index;
//   this._MoviesService.getTrendingMovies(this.currentindex).subscribe(data=>{
//     this.trending=data.results;
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
