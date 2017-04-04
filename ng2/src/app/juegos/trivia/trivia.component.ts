import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../json.service';
import { RoutesTransition } from '../../routestransition.service';
import { Globals } from '../../globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css','../../transitions.css']
})

export class TriviaComponent implements OnInit {
  juegosJson:string = Globals.JSON_JUEGOS;

  constructor(public json: JsonService, public rtAni: RoutesTransition) {
    json.getJson(Globals.JSON_JUEGOS).subscribe(val => {
      $.each(val.Juegos[0].Contenidos, function(i, item) {
        var pregunta = val.Juegos[0].Contenidos[i].Titulo;
        $("#preguntas").append("<input type='radio' id='pr"+i+"' name='preg' value="+i+"><label for='pr"+i+"'>"+pregunta+"</label>");
      });
    });
  }

  ngOnInit() {
    var iimg = 0;
    var pregunta;
    var input;
    var resp;

    $.getJSON(this.juegosJson, function (data) {
      resp = data;
    });

    $('.ctrivia').animate({height: "80%"}, 2500);

    $("#preguntas").click(function() {
      if($('input[name="preg"]').is(":checked")) {
        var pregun = $('input[name="preg"]:checked').val();
        var json_respuestas = ["", "", ""];
        $("#proviRespuestas").html(resp.Juegos[0].Contenidos[pregun].Resumen);
        $("#proviRespuestas ul li").map(function(i) {
           json_respuestas[i] = $(this).text();
         });
         var r1 = false;
         var r2 = false;
         var r3 = false;

         if(resp.Juegos[0].Contenidos[pregun].Descripcion === "<p>1</p>"){
           r1 = true;
         }else if(resp.Juegos[0].Contenidos[pregun].Descripcion === "<p>2</p>"){
           r2 = true;
         }else if(resp.Juegos[0].Contenidos[pregun].Descripcion === "<p>3</p>"){
           r3 = true;
         }

        $("#respuesta").empty();
        $("#respuesta").append("<input type='radio' id='res1' name='respuesta' value='"+r1+"'><label for='res1'>"+json_respuestas[0]+"</label>");
        $("#respuesta").append("<input type='radio' id='res2' name='respuesta' value='"+r2+"'><label for='res2'>"+json_respuestas[1]+"</label>");
        $("#respuesta").append("<input type='radio' id='res3' name='respuesta' value='"+r3+"'><label for='res3'>"+json_respuestas[2]+"</label>");
      }
    });

    $(document).ready(function(){
      var nimg = 2;

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

        /////////////////////////////////
        pregunta = $('input[name="preg"]:checked').val();
        input = $('input[name="respuesta"]:checked').val();
        /////////////////////////////////

        $( "p#mostrar_resultados" ).html("<br>Pregunta N°: "+pregunta+"<br>Respuesta: "+input);
        console.log("Pregunta n°: "+pregunta);
        console.log("Input: "+input);
      });

      $( "#fIzquierda" ).click(function() {
        iimg--;
        if(iimg === 0){
          $( "#fIzquierda" ).fadeOut(300);
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
