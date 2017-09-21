import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
    selector:'app-database',
    template:`<header class="row spacing">
     <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-tabs">
         <li routerLinkActive="active"><a [routerLink]="['adddb']">Add New Database</a></li>
         <li routerLinkActive="active"><a [routerLink]="['listdb']">Database Details</a></li>
        </ul>
     </nav>
  </header>
  <div class="row spacing">
    <router-outlet></router-outlet>
  </div>`
})

export class DatabaseComponent{
  
}