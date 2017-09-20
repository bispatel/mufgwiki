import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messsages.component";
import { AuthenticationComponent } from "./auth/authentication.component";


import { IndexComponent } from "./index/login/index.component";
import { RegistrationComponent } from "./index/registration/registration.component";
import { HeaderComponent } from "./header/header.component";
import { AUTH_HEADER_ROUTES } from "./header/auth.header";

const APP_ROUTES:Routes = [
    {path:'',redirectTo:'/index',pathMatch:'full'},
    {path:'index',component:IndexComponent},
    {path:'signUp',component:RegistrationComponent},    
    {path:'success',component:HeaderComponent,children:AUTH_HEADER_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
