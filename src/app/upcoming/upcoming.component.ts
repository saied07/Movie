import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  upcoming:object[];
  pageNumber:number[]=[];
  items = [];
  pageOfItems: Array<any>;
  searchText;
  currentindex=1;
  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getUpcomingMovies(this.currentindex).subscribe(data=>{
      this.upcoming=data.results;
      for(let i=1;i<=data.total_pages;i++){
        this.pageNumber.push(i);
      }
      this.pageOfItems=this.upcoming;

    })
   }
   onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
}
// changePage(index){
// this.currentindex=index;
// this._MoviesService.getUpcomingMovies(this.currentindex).subscribe(data=>{
//   this.upcoming=data.results;
// })
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
