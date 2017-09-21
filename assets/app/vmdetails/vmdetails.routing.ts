import { Routes, RouterModule } from "@angular/router";
import { VMInputComponent } from "./addvm/vm-input.component";
import { VMListComponent } from "./listvm/vm-list.component";




//This is the child root so need of forRoot. Simply export it and use in the main route file
const VM_ROUTES:Routes = [
    {path:'',redirectTo:'listvm',pathMatch:'full'},
    {path:'addvm',component:VMInputComponent},
    {path:'listvm',component:VMListComponent}    
];

export const appVMRouting =RouterModule.forChild(VM_ROUTES);


 