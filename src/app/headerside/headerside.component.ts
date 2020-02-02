import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-headerside',
  templateUrl: './headerside.component.html',
  styleUrls: ['./headerside.component.css']
})
export class HeadersideComponent implements OnInit {

  changetoggle(){
    $("#toggle").hide();
    $(".fa-times").show();
    $("#toggle").addClass("open");
    $("#header-side").animate({left:"250px"},500);
    $("#sidemenu").animate({
        left:"0px"
    },500);
    $("ul li").animate({
        "paddingTop":"25px",
        opacity:"1"
    },1000);
    $(".mov-section,.movie-details").animate({marginLeft:"25%"});

  }
  closeMenu(){
      $(".fa-times").hide();
      $("#toggle").show();
      $("#header-side").animate({left:"0px"},500);
      $("#sidemenu").animate({left:"-250px"},500);
      $(".fa-times").addClass("close");
      $("ul li").animate({
          "paddingTop":"500px",
          opacity:"0"
      },1000);
      $(".mov-section,.movie-details").animate({marginLeft:"0%"});

  }


  constructor(public _router:Router) {

   }

  ngOnInit() {
    this._router.navigate([]).then( (e) => {
      if (e) {
        console.log("yes");
       
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

}
