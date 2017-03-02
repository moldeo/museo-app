import { ViewChild, ViewChildren, Component, OnInit } from '@angular/core';
import * as html2canvas from "html2canvas";
import "tracking";

@Component({
  selector: 'app-per-1',
  templateUrl: './per-1.component.html',
  styleUrls: ['./per-1.component.css']
})
export class Per1Component implements OnInit {
  @ViewChild('hardwareVideo') hardwareVideo: any;

  constructor() { }

  ngOnInit() {
    let video = this.hardwareVideo.nativeElement;

    var n = <any>navigator;

    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );

    n.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
        $('#snap').fadeIn(50);
    });
  }

}
