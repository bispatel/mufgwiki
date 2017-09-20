import { Routes, RouterModule } from "@angular/router";
import { AppLinkInputComponent } from "./addLink/appLink-input.component";
import { AppLinkListComponent } from "./listLink/appLink-list.component";



//This is the child root so need of forRoot. Simply export it and use in the main route file
const APP_LINK_ROUTES:Routes = [
    {path:'',redirectTo:'listLinks',pathMatch:'full'},
    {path:'addLinks',component:AppLinkInputComponent},
    {path:'listLinks',component:AppLinkListComponent}    
];

export const appLinksRouting =RouterModule.forChild(APP_LINK_ROUTES);


 