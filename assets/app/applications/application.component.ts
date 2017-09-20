import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AppReleaseService } from "./service/application.service";


@Component({
    selector:'app-application',
  template:` 
  <header class="row spacing">
     <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-tabs">
         <li routerLinkActive="active"><a [routerLink]="['addRelease']">Add Release</a></li>
         <li routerLinkActive="active"><a [routerLink]="['listReleases']">Releases</a></li>
        </ul>
     </nav>
  </header>
  <div class="row spacing">
    <router-outlet></router-outlet>
  </div>
`

})

export class AppReleaseComponent{
color = 'green';
constructor(private messageService: AppReleaseService){}
    
}