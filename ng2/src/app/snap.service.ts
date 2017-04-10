import { Injectable } from '@angular/core';

@Injectable()
export class SnapService {

  constructor() { }

  snapshot(p:number, points:any, ctx:any){
    $('.flash').css("display", "block").delay(500).queue( function(next){ $(this).fadeOut(400); next();});
    /*Obtener Parámetros del Rostro*/
    //Ojo Izquierdo: x:27 | y:27
    //Ojo Derecho: x:32 | y:32
    //Ojo Nariz: x:62 | y:62
    let params = points;
    let w = params[14][0]-params[0][0];
    let h = params[7][1]-params[21][1];
    let sx = 80/w;
    let sy = 80/h;
    let width = ctx.nativeElement.width;
    let height = ctx.nativeElement.height;
    let newWidth = width*sx;
    let newHeight = height*sy;

    let canvasInput = ctx.nativeElement;
    let cc = canvasInput.getContext('2d');

    cc.save();
    cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
    cc.translate(-params[62][0], -params[62][1]);
    cc.translate(width/2, height/2);
    cc.translate(-((newWidth-width)/2), -((newHeight-height)/2));
    cc.scale(sx, sy);

    cc.beginPath();
    for (let i = 0; i <= 19; i++) {
      cc.lineTo(params[i][0],params[i][1]);
    }
    cc.lineTo(params[0][0],params[0][1]);
    cc.clip();
    cc.drawImage(document.getElementById("videoElement"), 0, 0, 300, 240);
    cc.restore();

    ////////////////////////////////////////////
    $('#siguiente').fadeIn(300);
  }
}
