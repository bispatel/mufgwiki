import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ProjectService } from "./service/project.service";


@Component({
    selector:'app-project',
  template:` 
  <header class="row spacing">
     <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-tabs">
         <li routerLinkActive="active"><a [routerLink]="['addProject']">Add Project</a></li>
         <li routerLinkActive="active"><a [routerLink]="['listProject']">Project List</a></li>
        </ul>
     </nav>
  </header>
  <div class="row spacing">
    <router-outlet></router-outlet>
  </div>
`

})

export class ProjectComponent{
color = 'green';
constructor(private messageService: ProjectService){}
    
}