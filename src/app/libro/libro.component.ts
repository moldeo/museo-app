import { Component, OnInit } from '@angular/core';
import { RoutesTransition } from '../routestransition.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: [
    './libro.component.css',
    '../transitions.css'
  ]
})
export class LibroComponent implements OnInit {

  constructor(public rtAni: RoutesTransition) { }

  ngOnInit() {
    var ffirma;
    var tfirma;

    $( "#firmar" ).click(function() {
      var ltext = $('#firma_texto').val();
      var lnom = $('#firma').val();

      if(lnom === ''){
        lnom = "Anónimo";
      }

      if(tfirma === undefined){
        tfirma = "";
      }

      ffirma = "<div><p>&quot;"+ltext+"&quot;</p><span>"+lnom+"</span></div>";
      tfirma = ffirma + " " + tfirma;

      $("#las_firmas").html(tfirma);

      $("#ver_firmas").animate({
        left: "0",
      }, 500);
    });

    $( "#ir_firmas" ).click(function() {
      $("#ver_firmas").animate({
        left: "0",
      }, 500);
    });

    $( "#a_firmar" ).click(function() {
      $('#firma').val('');
      $('#firma_texto').val('');

      $("#ver_firmas").animate({
        left: "100%",
      }, 400);
    });

    $("#las_firmas").html(tfirma);
  }

}
