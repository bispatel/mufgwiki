import { Component, Input, Output, EventEmitter } from "@angular/core";



@Component({
    selector:'app-vm',
  template:` 
  <header class="row spacing">
     <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-tabs">
         <li routerLinkActive="active"><a [routerLink]="['addvm']">Add VM</a></li>
         <li routerLinkActive="active"><a [routerLink]="['listvm']">VM Details</a></li>
        </ul>
     </nav>
  </header>
  <div class="row spacing">
    <router-outlet></router-outlet>
  </div>
`

})

export class VMComponent{
color = 'green';
   
}