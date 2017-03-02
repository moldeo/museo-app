import { Component, OnInit, DoCheck} from '@angular/core';
import { JsonService } from './json.service';
import { FileAdminService } from './fileadmin.service';
import { RoutesTransition } from './routestransition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './transitions.css'
  ],
})

export class AppComponent {
  jsonRute = 'http://admin.moldeointeractive.com.ar/wiwe/principal/home/jasones.php?_tema_=Area_de_bienvenida&output=json';
  title = 'Bienvenida';

  constructor(private json: JsonService, public rtAni: RoutesTransition){
    json.getJson(this.jsonRute).subscribe(val => {
      
    });
  }

  ngOnInit(){
  }

  ngDoCheck(){
  }
}
