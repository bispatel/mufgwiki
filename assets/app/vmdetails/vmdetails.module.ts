import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { VMListComponent } from "./listvm/vm-list.component";
import { VMInputComponent } from "./addvm/vm-input.component";
import { appVMRouting } from "./vmdetails.routing";



@NgModule({
    declarations: [
        VMInputComponent,
        VMListComponent      
    ],
    imports: [     
              CommonModule,         
              ReactiveFormsModule,
              appVMRouting            
            ]  
})
export class VMModule {

}