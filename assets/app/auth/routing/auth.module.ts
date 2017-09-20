import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { authRouting } from "./auth.routing";
import { SignUpComponent } from "../signup/signup.component";
import { SignInComponent } from "../signin/signin.component";
import { LogoutComponent } from "../logout/logout.component";


@NgModule({
    declarations: [
        LogoutComponent,
        SignInComponent,
        SignUpComponent    
    ],
    imports: [     
              CommonModule,         
              ReactiveFormsModule,
              authRouting            
            ]  
})
export class AuthModule {

}