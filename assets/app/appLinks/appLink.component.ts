import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AppLinkService } from "./service/appLink.service";


@Component({
    selector:'app-link',
  template:` 
  <header class="row spacing">
     <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-tabs">
         <li routerLinkActive="active"><a [routerLink]="['addLinks']">Add Links</a></li>
         <li routerLinkActive="active"><a [routerLink]="['listLinks']">QA Links</a></li>
        </ul>
     </nav>
  </header>
  <div class="row spacing">
    <router-outlet></router-outlet>
  </div>
`

})

export class AppLinkComponent{
color = 'green';
   
}