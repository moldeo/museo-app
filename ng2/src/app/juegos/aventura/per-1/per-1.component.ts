import { ViewChild, ViewChildren, Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { RoutesTransition } from '../../../routestransition.service';
import { SnapService } from '../../../snap.service';
import { FaceTracker } from "../FaceTracker";
import * as html2canvas from "html2canvas";
import * as $ from "jquery";
export const fs:any = window["fs"];

@Component({
  selector: 'app-per-1',
  templateUrl: './per-1.component.html',
  styleUrls: ['./per-1.component.css',
  '../../../transitions.css']
})
export class Per1Component implements OnInit {
  public track:any;
  ///////////////////////////////////
  @ViewChild('hardwareVideo') private hardwareVideo: ElementRef;
  @ViewChild("overlay") private overlay: ElementRef;
  @ViewChild("drawer") private ctx: ElementRef;

  constructor(myElement: ElementRef, public rtAni: RoutesTransition, public s: SnapService) {}

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
}
