import { ElementRef } from '@angular/core';
const Tracker = require('./lib/clmtrackr.js');
const faceModel = require('./lib/model_spca_20_svm.js');

export class FaceTracker {

  private _video: ElementRef;
  private _overlayCC: ElementRef;
  private _videoReady: boolean = false;

  private _ctracker:any;
  public _params:any;

  public _face:boolean = false;

  constructor(video:ElementRef, overlayCC:ElementRef, videoReady:boolean) {
    this._video = video;
    this._overlayCC = overlayCC;
    this._videoReady = videoReady;
    ////////////////////////////////////////
    this._ctracker = new Tracker.tracker({useWebGL: true, searchWindow : 14});
  }

  public startTrack(debug:boolean) {
    //Tracking
    this._ctracker.init(faceModel);
    //Draw in Canvas
    this.startFace();
    this.drawLoop();
  }

  public stopFace(){
    this._ctracker.stop();
    this._face = false;
  }

  public startFace(){
    this._ctracker.start(this._video.nativeElement);
    this._face = true;
  }

  public drawLoop = () => {
    let canvasInput = this._overlayCC.nativeElement;

    if (this._ctracker.getCurrentPosition()) {

      let cc = canvasInput.getContext('2d');

      if(this._ctracker.getScore() > 0.5){
        cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
        this._ctracker.draw(canvasInput);

        this._params = this._ctracker.getCurrentPosition();
      }else{
        cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
      }

    }
    requestAnimationFrame(this.drawLoop);
  }

}
