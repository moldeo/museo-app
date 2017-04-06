import { ViewChild, ViewChildren, Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { FaceTracker } from "../FaceTracker";
export const fs:any = window["fs"];
import * as html2canvas from "html2canvas";
import * as $ from "jquery";

@Component({
  selector: 'app-per-1',
  templateUrl: './per-1.component.html',
  styleUrls: ['./per-1.component.css']
})
export class Per1Component implements OnInit {
  public track:any;
  public params:any;
  ///////////////////////////////////
  @ViewChild('hardwareVideo') private hardwareVideo: ElementRef;
  @ViewChild("overlay") private overlay: ElementRef;
  @ViewChild("drawer") private ctx: ElementRef;

  constructor(myElement: ElementRef) {  }

  ngOnInit() {
    let video = this.hardwareVideo.nativeElement;

    let n = <any>navigator;

    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );

    n.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
        $('#snap').fadeIn(50);
    });
  }

  private ctrack() {
    this.track = new FaceTracker(this.hardwareVideo, this.overlay, true);
    this.track.startTrack();
  }
  ngAfterViewInit() {
    this.ctrack();
  }

  stopFace(){
    this.track.stopFace();
  }
  startFace(){
    this.track.startFace();
  }

  //////////////////////////////////////////////
  snapshot(p:number){
    $('.flash').css("display", "block").delay(500).queue( function(next){ $(this).fadeOut(400); next();});
    /*Obtener Parámetros del Rostro*/
    this.params = this.track._params;
    let w = this.params[14][0]-this.params[0][0];
    let h = this.params[7][1]-this.params[21][1];
    let sx = 80/w;
    let sy = 80/h;
    let width = 300;
    let height = 240;
    let newWidth = width*sx;
    let newHeight = height*sy;

    let canvasInput = this.ctx.nativeElement;
    let cc = canvasInput.getContext('2d');

    cc.save();
    cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
    cc.translate(-this.params[62][0], -this.params[62][1]);
    cc.translate(width/2, height/2);
    cc.translate(-((newWidth-width)/2), -((newHeight-height)/2));
    cc.scale(sx, sy);

    cc.beginPath();
    for (let i = 0; i <= 19; i++) {
      cc.lineTo(this.params[i][0],this.params[i][1]);
    }
    cc.lineTo(this.params[0][0],this.params[0][1]);
    cc.clip();
    cc.drawImage(document.getElementById("videoElement"), 0, 0, 300, 240);
    cc.restore();
  }

}
