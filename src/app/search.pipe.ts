import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies:any,text:any): any {
    if(text==undefined){
      return movies;
    }

    return movies.filter(function(movie){
     return movie.title.toLowerCase().includes(text.toLowerCase());
    });
  }

}
