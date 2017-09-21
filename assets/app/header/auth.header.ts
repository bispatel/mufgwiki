import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "../messages/messsages.component";
import { AuthenticationComponent } from "../auth/authentication.component";
import { AboutComponent } from "../about/about.component";
import { ProjectComponent } from "../projects/project.component";
import { AppReleaseComponent } from "../applications/application.component";
import { AppLinkComponent } from "../appLinks/appLink.component";
import { VMComponent } from "../vmdetails/vmdetails.component";
import { DatabaseComponent } from "../dbDetails/database.component";
import { FileUploadComponent } from "../fileUpload/fileUpload.component";
//This is the child root so need of forRoot. Simply export it and use in the main route file
export const AUTH_HEADER_ROUTES:Routes = [
    {path:'',redirectTo:'messages',pathMatch:'full'},
    {path:'messages',component:MessagesComponent},       
    {path:'auth',component:AuthenticationComponent,loadChildren:'../auth/routing/auth.module#AuthModule'},
    {path:'dbDetails',component:DatabaseComponent,loadChildren:'../dbDetails/database.module#DatabaseModule'},
    {path:'qalinks',component:AppLinkComponent,loadChildren:'../appLinks/appLink.module#AppLinkModule'}, 
    {path:'vmDetails',component:VMComponent,loadChildren:'../vmdetails/vmdetails.module#VMModule'}, 
    {path:'abouts',component:AboutComponent},
    {path:'projects',component:ProjectComponent,loadChildren:'../projects/project.module#ProjectModule'},
    {path:'releases',component:AppReleaseComponent,loadChildren:'../applications/application.module#AppReleaseModule'},
    {path:'fileupload',component:FileUploadComponent}
    
    
];


 