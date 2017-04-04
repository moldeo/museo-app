import { Component, OnInit } from '@angular/core';
import { RoutesTransition } from '../routestransition.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: [
    './mapas.component.css',
    '../transitions.css'
  ]
})
export class MapasComponent {

  constructor(public rtAni: RoutesTransition) {}

  ngOnInit() {
    var iimg = 0;

    $(document).ready(function(){
      var nimg = 3;

      $( "#fDerecha" ).click(function() {
        iimg++;
        if(iimg === 0){
          $( "#fIzquierda" ).fadeOut( 300 );
        }else if(iimg > 0){
          $( "#fDerecha" ).fadeIn( 300 );
          $( "#fIzquierda" ).fadeIn( 300 );
        }
        if(iimg >= nimg){
          $( "#fDerecha" ).fadeOut( 300 );
        }
        $("#i0"+iimg).animate({
          left: "-100%",
        }, 500 );
        $("#i0"+(iimg+1)).animate({
          left: "0",
        }, 500 );
      });

      $( "#fIzquierda" ).click(function() {
        iimg--;
        if(iimg === 0){
          $( "#fIzquierda" ).fadeOut( 300 );
        }else if(iimg > 0){
          $( "#fDerecha" ).fadeIn( 300 );
          $( "#fIzquierda" ).fadeIn( 300 );
        }
        if(iimg >= nimg){
          $( "#fDerecha" ).fadeOut( 300 );
        }
        $("#i0"+(iimg+1)).animate({
          left: "0",
        }, 500 );
        $("#i0"+(iimg+2)).animate({
          left: "100%",
        }, 500 );
      });

    });
  }

}
