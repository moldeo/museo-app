import { Component, OnInit } from '@angular/core';
import { RoutesTransition } from '../../routestransition.service';

@Component({
  selector: 'app-aventura',
  templateUrl: './aventura.component.html',
  styleUrls: [
    './aventura.component.css',
    '../../transitions.css'
  ]
})

export class AventuraComponent implements OnInit {

  constructor(public rtAni: RoutesTransition) { }

  ngOnInit() {
  }

}
