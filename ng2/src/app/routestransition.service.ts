import { Injectable } from '@angular/core';

/*********************************************

Routes Transition Animation Service for Ng2

Animated Transitions between NG2-Routes like
jQuery Mobile. Its posible create custom
animations editing the file transitions.css
and creating a new function into the class
RoutesTransition of this Service file.

Require file "transitions.css" load in
styleUrls of Components.

*********************************************/

@Injectable()
export class RoutesTransition {
  constructor() { }

  //////SIMPLE SLIDE//////
  goSlide(from: string, to: string){
    //Initial Set
    var intervalHandle = null;
    document.getElementById(from).style.position = 'fixed';
    document.getElementById(to).style.position = 'fixed';
    document.getElementById(to).style.display = 'block';
    //Animation
    document.getElementById(from).className += " gotoleft";
    document.getElementById(to).className += " gofromright";
    //Final Set
    intervalHandle = setInterval(function(){
      document.getElementById(from).className = document.getElementById(from).className.replace(/(?:^|\s)gotoleft(?!\S)/g,'');
      document.getElementById(to).className = document.getElementById(to).className.replace(/(?:^|\s)gofromright(?!\S)/g,'');
      document.getElementById(from).style.display = 'none';
      document.getElementById(from).style.position = 'relative';
      document.getElementById(to).style.position = 'relative';
      clearInterval(intervalHandle);
    }, 350);
  }
  backSlide(from: string, to: string){
    //Initial Set
    var intervalHandle = null;
    document.getElementById(from).style.position = 'fixed';
    document.getElementById(to).style.position = 'fixed';
    document.getElementById(to).style.display = 'block';
    //Animation
    document.getElementById(from).className += " gotoright";
    document.getElementById(to).className += " gofromleft";
    //Final Set
    intervalHandle = setInterval(function(){
      document.getElementById(from).className = document.getElementById(from).className.replace(/(?:^|\s)gotoleft(?!\S)/g,'');
      document.getElementById(to).className = document.getElementById(to).className.replace(/(?:^|\s)gofromright(?!\S)/g,'');
      document.getElementById(from).style.display = 'none';
      document.getElementById(from).style.position = 'relative';
      document.getElementById(to).style.position = 'relative';
      clearInterval(intervalHandle);
    }, 350);
  }
  /////SLIDEUP/////
  goSlideUp(from: string, to: string){
    //Initial Set
    var intervalHandle = null;
    document.getElementById(from).style.position = 'fixed';
    document.getElementById(to).style.position = 'fixed';
    document.getElementById(to).style.display = 'block';
    //Animation
    document.getElementById(from).className += " fadeout";
    document.getElementById(to).className += " gofromtop";
    //Final Set
    intervalHandle = setInterval(function(){
      document.getElementById(from).className = document.getElementById(from).className.replace(/(?:^|\s)fadeout(?!\S)/g,'');
      document.getElementById(to).className = document.getElementById(to).className.replace(/(?:^|\s)gofromtop(?!\S)/g,'');
      document.getElementById(from).style.display = 'none';
      document.getElementById(from).style.position = 'relative';
      document.getElementById(to).style.position = 'relative';
      clearInterval(intervalHandle);
    }, 500);
  }
  /////SLIDEDOWN/////
  goSlideDown(from: string, to: string){
    //Initial Set
    var intervalHandle = null;
    document.getElementById(from).style.position = 'fixed';
    document.getElementById(to).style.position = 'fixed';
    document.getElementById(to).style.display = 'block';
    //Animation
    document.getElementById(from).className += " fadeout";
    document.getElementById(to).className += " gofrombottom";
    //Final Set
    intervalHandle = setInterval(function(){
      document.getElementById(from).className = document.getElementById(from).className.replace(/(?:^|\s)fadeout(?!\S)/g,'');
      document.getElementById(to).className = document.getElementById(to).className.replace(/(?:^|\s)gofrombottom(?!\S)/g,'');
      document.getElementById(from).style.display = 'none';
      document.getElementById(from).style.position = 'relative';
      document.getElementById(to).style.position = 'relative';
      clearInterval(intervalHandle);
    }, 500);
  }
  /////SLIDEFADE/////
  goSlideFade(from: string, to: string){
    //Initial Set
    var intervalHandle = null;
    document.getElementById(from).style.position = 'fixed';
    document.getElementById(to).style.position = 'fixed';
    document.getElementById(to).style.display = 'block';
    //Animation
    document.getElementById(from).className += " gotoleftfade";
    document.getElementById(to).className += " gofromrightfade";
    //Final Set
    intervalHandle = setInterval(function(){
      document.getElementById(from).className = document.getElementById(from).className.replace(/(?:^|\s)gotoleftfade(?!\S)/g,'');
      document.getElementById(to).className = document.getElementById(to).className.replace(/(?:^|\s)gofromrightfade(?!\S)/g,'');
      document.getElementById(from).style.display = 'none';
      document.getElementById(to).style.opacity = '1';
      document.getElementById(from).style.position = 'relative';
      document.getElementById(to).style.position = 'relative';
      clearInterval(intervalHandle);
    }, 350);
  }
  backSlideFade(from: string, to: string){
    //Initial Set
    var intervalHandle = null;
    document.getElementById(from).style.position = 'fixed';
    document.getElementById(to).style.position = 'fixed';
    document.getElementById(to).style.display = 'block';
    //Animation
    document.getElementById(from).className += " gotorightfade";
    document.getElementById(to).className += " gofromleftfade";
    //Final Set
    intervalHandle = setInterval(function(){
      document.getElementById(from).className = document.getElementById(from).className.replace(/(?:^|\s)gotorightfade(?!\S)/g,'');
      document.getElementById(to).className = document.getElementById(to).className.replace(/(?:^|\s)gofromleftfade(?!\S)/g,'');
      document.getElementById(from).style.display = 'none';
      document.getElementById(to).style.opacity = '1';
      document.getElementById(from).style.position = 'relative';
      document.getElementById(to).style.position = 'relative';
      clearInterval(intervalHandle);
    }, 350);
  }
  //////FLOW//////
  goFlow(from: string, to: string){
    //Initial Set
    var intervalHandle = null;
    document.getElementById(from).style.position = 'fixed';
    document.getElementById(from).style.overflow = 'hidden';
    document.getElementById(to).style.position = 'fixed';
    document.getElementById(to).style.overflow = 'hidden';
    document.getElementById(to).style.display = 'block';
    document.getElementById(to).style.left = '100%';
    //Animation
    document.getElementById(from).className += " flowtoleft";
    document.getElementById(to).className += " flowfromright";
    intervalHandle = setInterval(function(){
      document.getElementById(from).className = document.getElementById(from).className.replace(/(?:^|\s)flowtoleft(?!\S)/g,'');
      document.getElementById(to).className = document.getElementById(to).className.replace(/(?:^|\s)flowfromright(?!\S)/g,'');
      document.getElementById(from).style.display = 'none';
      document.getElementById(from).style.position = 'relative';
      document.getElementById(to).style.left = '0%';
      document.getElementById(to).style.position = 'relative';
      clearInterval(intervalHandle);
    }, 1000);
  }
  backFlow(from: string, to: string){
    //Initial Set
    var intervalHandle = null;
    document.getElementById(from).style.position = 'fixed';
    document.getElementById(from).style.overflow = 'hidden';
    document.getElementById(to).style.position = 'fixed';
    document.getElementById(to).style.overflow = 'hidden';
    document.getElementById(to).style.display = 'block';
    document.getElementById(to).style.left = '100%';
    //Animation
    document.getElementById(from).className += " flowtoright";
    document.getElementById(to).className += " flowfromleft";
    intervalHandle = setInterval(function(){
      document.getElementById(from).className = document.getElementById(from).className.replace(/(?:^|\s)flowtoright(?!\S)/g,'');
      document.getElementById(to).className = document.getElementById(to).className.replace(/(?:^|\s)flowfromleft(?!\S)/g,'');
      document.getElementById(from).style.display = 'none';
      document.getElementById(from).style.position = 'relative';
      document.getElementById(to).style.left = '0%';
      document.getElementById(to).style.position = 'relative';
      clearInterval(intervalHandle);
    }, 1000);
  }
  /////FADE/////
  goFade(from: string, to: string){
    //Initial Set
    var intervalHandle = null;
    document.getElementById(from).style.position = 'fixed';
    document.getElementById(to).style.position = 'fixed';
    document.getElementById(to).style.display = 'block';
    document.getElementById(to).style.opacity = '0';
    //Animation
    document.getElementById(from).className += " fadeout";
    document.getElementById(to).className += " fadein";
    //Final Set
    intervalHandle = setInterval(function(){
      document.getElementById(from).className = document.getElementById(from).className.replace(/(?:^|\s)fadeout(?!\S)/g,'');
      document.getElementById(to).className = document.getElementById(to).className.replace(/(?:^|\s)fadein(?!\S)/g,'');
      document.getElementById(from).style.display = 'none';
      document.getElementById(to).style.opacity = '1';
      document.getElementById(from).style.position = 'relative';
      document.getElementById(to).style.position = 'relative';
      clearInterval(intervalHandle);
    }, 350);
  }
  /////POP/////
  goPop(from: string, to: string){
    //Initial Set
    var intervalHandle = null;
    document.getElementById(from).style.position = 'fixed';
    document.getElementById(to).style.position = 'fixed';
    document.getElementById(to).style.display = 'block';
    document.getElementById(to).style.opacity = '0';
    //Animation
    document.getElementById(from).className += " fadeout";
    document.getElementById(to).className += " gopop";
    //Final Set
    intervalHandle = setInterval(function(){
      document.getElementById(from).className = document.getElementById(from).className.replace(/(?:^|\s)fadeout(?!\S)/g,'');
      document.getElementById(to).className = document.getElementById(to).className.replace(/(?:^|\s)gopop(?!\S)/g,'');
      document.getElementById(from).style.display = 'none';
      document.getElementById(to).style.opacity = '1';
      document.getElementById(from).style.position = 'relative';
      document.getElementById(to).style.position = 'relative';
      clearInterval(intervalHandle);
    }, 1000);
  }
  fromPop(from: string, to: string){
    //Initial Set
    var intervalHandle = null;
    document.getElementById(from).style.position = 'fixed';
    document.getElementById(to).style.position = 'fixed';
    document.getElementById(to).style.display = 'block';
    document.getElementById(to).style.opacity = '0';
    //Animation
    document.getElementById(from).className += " frompop";
    document.getElementById(to).className += " fadein-d";
    //Final Set
    intervalHandle = setInterval(function(){
      document.getElementById(from).className = document.getElementById(from).className.replace(/(?:^|\s)frompop(?!\S)/g,'');
      document.getElementById(to).className = document.getElementById(to).className.replace(/(?:^|\s)fadein-d(?!\S)/g,'');
      document.getElementById(from).style.display = 'none';
      document.getElementById(to).style.opacity = '1';
      document.getElementById(from).style.position = 'relative';
      document.getElementById(to).style.position = 'relative';
      clearInterval(intervalHandle);
    }, 1000);
  }
  /////TURN/////
  goTurn(from: string, to: string){
    //Initial Set
    var intervalHandle = null;
    document.getElementById(from).style.position = 'fixed';
    document.getElementById(to).style.position = 'fixed';
    document.getElementById(to).style.display = 'block';
    document.getElementById(to).style.opacity = '0';
    //Animation
    document.getElementById(from).className += " goturn";
    document.getElementById(to).className += " fromturn";
    //Final Set
    intervalHandle = setInterval(function(){
      document.getElementById(from).className = document.getElementById(from).className.replace(/(?:^|\s)goturn(?!\S)/g,'');
      document.getElementById(to).className = document.getElementById(to).className.replace(/(?:^|\s)fromturn(?!\S)/g,'');
      document.getElementById(from).style.display = 'none';
      document.getElementById(to).style.opacity = '1';
      document.getElementById(from).style.position = 'relative';
      document.getElementById(to).style.position = 'relative';
      clearInterval(intervalHandle);
    }, 450);
  }
  /////FLIP/////
  goFlip(from: string, to: string){
    //Initial Set
    var intervalHandle = null;
    document.getElementById(from).style.position = 'fixed';
    document.getElementById(to).style.position = 'fixed';
    document.getElementById(to).style.display = 'block';
    document.getElementById(to).style.opacity = '0';
    //Animation
    document.getElementById(from).className += " goflip";
    document.getElementById(to).className += " fromflip";
    //Final Set
    intervalHandle = setInterval(function(){
      document.getElementById(from).className = document.getElementById(from).className.replace(/(?:^|\s)goflip(?!\S)/g,'');
      document.getElementById(to).className = document.getElementById(to).className.replace(/(?:^|\s)fromflip(?!\S)/g,'');
      document.getElementById(from).style.display = 'none';
      document.getElementById(to).style.opacity = '1';
      document.getElementById(from).style.position = 'relative';
      document.getElementById(to).style.position = 'relative';
      clearInterval(intervalHandle);
    }, 550);
  }
}
