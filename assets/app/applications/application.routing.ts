import { Routes, RouterModule } from "@angular/router";
import { ApplicationListComponent } from "./listApps/application-list.component";
import { AppReleaseInputComponent } from "./addApp/application-input.component";



//This is the child root so need of forRoot. Simply export it and use in the main route file
const APP_RELEASE_ROUTES:Routes = [
    {path:'',redirectTo:'listReleases',pathMatch:'full'},
    {path:'addRelease',component:AppReleaseInputComponent},
    {path:'listReleases',component:ApplicationListComponent}    
];

export const appReleaseRouting =RouterModule.forChild(APP_RELEASE_ROUTES);


 