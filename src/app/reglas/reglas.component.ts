import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { RoutesTransition } from '../routestransition.service';
import { Globals } from '../globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-reglas',
  templateUrl: './reglas.component.html',
  styleUrls: [
    './reglas.component.css',
    '../transitions.css'
  ]
})
export class ReglasComponent implements OnInit {
  titulo: string;
  descripcion: string;

  constructor(public rtAni: RoutesTransition, public json: JsonService) {
    json.getJson(Globals.JSON).subscribe(val => {
      this.titulo = val.Area_de_bienvenida[4].Contenidos[0].Titulo.replace(Globals.REGEX, "");
      this.descripcion = val.Area_de_bienvenida[4].Contenidos[0].Resumen.replace(Globals.REGEX, "");
    });
  }

  ngOnInit() {
    var iimg = 0;

    $(document).ready(function(){
      var nimg = 1;

      $( "#fDerecha" ).click(function() {
        iimg++;
        if(iimg === 0){
          $( "#fIzquierda" ).fadeOut(300);
        }else if(iimg > 0){
          $( "#fDerecha" ).fadeIn(300);
          $( "#fIzquierda" ).fadeIn(300);
        }
        if(iimg >= nimg){
          $( "#fDerecha" ).fadeOut(300);
        }
        $("#t0"+iimg).animate({
          left: "-100%",
        }, 500);
        $("#t0"+(iimg+1)).animate({
          left: "0",
        }, 500);
      });

      $( "#fIzquierda" ).click(function() {
        iimg--;
        if(iimg === 0){
          $( "#fIzquierda" ).fadeOut(300);
          $( "#fDerecha" ).fadeIn(300);
        }else if(iimg > 0){
          $( "#fDerecha" ).fadeIn(300);
          $( "#fIzquierda" ).fadeIn(300);
        }
        if(iimg >= nimg){
          $( "#fDerecha" ).fadeOut(300);
        }
        $("#t0"+(iimg+1)).animate({
          left: "0",
        }, 500);
        $("#t0"+(iimg+2)).animate({
          left: "100%",
        }, 500);
      });

    });
  }

}
