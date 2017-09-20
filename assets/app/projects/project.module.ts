import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ProjectComponent } from "./project.component";
import { projectRouting } from "./project.routing";
import { ProjectListComponent } from "./listProject/project-list.component";
import { ProjectInputComponent } from "./addProject/project-input.component";


@NgModule({
    declarations: [
        ProjectInputComponent,
        ProjectListComponent      
    ],
    imports: [     
              CommonModule,         
              ReactiveFormsModule,
              projectRouting            
            ]  
})
export class ProjectModule {

}