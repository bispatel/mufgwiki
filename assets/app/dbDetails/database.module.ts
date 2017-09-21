import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DBListComponent } from "./listdb/database-list.component";
import { DBInputComponent } from "./adddb/database-input.component";
import { appDBRouting } from "./database.routing";
@NgModule({
    declarations: [
        DBInputComponent,
        DBListComponent      
    ],
    imports: [     
              CommonModule,         
              ReactiveFormsModule,
              appDBRouting            
            ]  
})
export class DatabaseModule {

}