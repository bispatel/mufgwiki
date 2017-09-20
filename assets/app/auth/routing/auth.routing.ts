import { Routes, RouterModule } from "@angular/router";
import { LogoutComponent } from "../logout/logout.component";
import { SignInComponent } from "../signin/signin.component";
import { SignUpComponent } from "../signup/signup.component";

//This is the child root so need of forRoot. Simply export it and use in the main route file
const AUTH_ROUTES:Routes = [
    {path:'',redirectTo:'signup',pathMatch:'full'},
    {path:'signup',component:SignUpComponent},
    {path:'signin',component:SignInComponent},
    {path:'logout',component:LogoutComponent}
];

export const authRouting =RouterModule.forChild(AUTH_ROUTES);


 