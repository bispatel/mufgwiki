import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header/header.component";
import { routing } from "./app.routing";
import { HttpModule } from "@angular/http";

import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { MessageModule } from "./messages/messages.module";

import { DatabaseComponent } from "./dbDetails/db.component";
import { DatabaseService } from "./dbDetails/db.service";
import { IndexComponent } from "./index/login/index.component";
import { RegistrationComponent } from "./index/registration/registration.component";
import { AuthService } from "./auth/service/auth.service";
import { AboutComponent } from "./about/about.component";
import { AboutService } from "./about/about.service";

import { ProjectComponent } from "./projects/project.component";
import { ProjectService } from "./projects/service/project.service";
import { AppReleaseComponent } from "./applications/application.component";
import { AppReleaseService } from "./applications/service/application.service";
import { AppLinkComponent } from "./appLinks/appLink.component";
import { AppLinkService } from "./appLinks/service/appLink.service";

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        ProjectComponent,
        AppReleaseComponent,
        HeaderComponent, 
        IndexComponent,  
        RegistrationComponent,    
        ErrorComponent,
        DatabaseComponent,
        AboutComponent,
        AppLinkComponent
    ],
    imports: [
              BrowserModule,             
              routing,
              ReactiveFormsModule,
              HttpModule,
              MessageModule            
            ],
    providers:[AuthService,
               ErrorService,
               DatabaseService,
               AboutService,
               ProjectService,
               AppReleaseService,
               AppLinkService
            ],
    bootstrap: [AppComponent]
})
export class AppModule {

}