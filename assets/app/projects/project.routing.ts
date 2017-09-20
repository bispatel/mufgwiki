import { Routes, RouterModule } from "@angular/router";
import { ProjectInputComponent } from "./addProject/project-input.component";
import { ProjectListComponent } from "./listProject/project-list.component";


//This is the child root so need of forRoot. Simply export it and use in the main route file
const PROJECT_ROUTES:Routes = [
    {path:'',redirectTo:'listProject',pathMatch:'full'},
    {path:'addProject',component:ProjectInputComponent},
    {path:'listProject',component:ProjectListComponent}    
];

export const projectRouting =RouterModule.forChild(PROJECT_ROUTES);


 