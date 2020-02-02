import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  popular:object[];
  pageNumber:number[]=[];
  items = [];
  searchText;
  pageOfItems: Array<any>;
  currentindex=1;
  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getPopularMovies(this.currentindex).subscribe(data=>{
      this.popular=data.results;
      for(let i=1;i<=data.total_pages;i++){
        this.pageNumber.push(i);
      }
      this.pageOfItems=this.popular;
    })
   }
   onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
}
// changePage(index){
//   this.currentindex=index;
//   this._MoviesService.getPopularMovies(this.currentindex).subscribe(data=>{
//     this.popular=data.results;
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
