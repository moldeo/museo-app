import { Component, OnInit } from '@angular/core';
import { RoutesTransition } from '../routestransition.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: [
    './juegos.component.css',
    '../transitions.css'
  ]
})
export class JuegosComponent implements OnInit {

  constructor(public rtAni: RoutesTransition) { }

  ngOnInit() {
    
  }

}
