import { Routes, RouterModule } from "@angular/router";
import { DBListComponent } from "./listdb/database-list.component";
import { DBInputComponent } from "./adddb/database-input.component";

//This is the child root so need of forRoot. Simply export it and use in the main route file
const DB_ROUTES:Routes = [
    {path:'',redirectTo:'listdb',pathMatch:'full'},
    {path:'adddb',component:DBInputComponent},
    {path:'listdb',component:DBListComponent}    
];

export const appDBRouting =RouterModule.forChild(DB_ROUTES);


 