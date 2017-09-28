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
import { VMComponent } from "./vmdetails/vmdetails.component";
import { VMService } from "./vmdetails/service/vmdetails.service";
import { DatabaseComponent } from "./dbDetails/database.component";
import { DatabaseService } from "./dbDetails/service/database.service";
import { FileUploadComponent } from "./fileUpload/fileUpload.component";
import {FileUploadModule} from "ng2-file-upload";
import { VMDialogComponent } from "./vmdetails/vmdetails.dialogComponent";
import { DialogService, BootstrapModalModule } from "ng2-bootstrap-modal";
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
        AppLinkComponent,
        VMComponent,     
        FileUploadComponent                
    ],
    imports: [
              BrowserModule,                           
              routing,
              ReactiveFormsModule,
              HttpModule,
              MessageModule,
              FileUploadModule            
            ],
    providers:[AuthService,
               ErrorService,
               DatabaseService,
               AboutService,
               ProjectService,
               AppReleaseService,
               AppLinkService,
               VMService
            ], 
    bootstrap: [AppComponent]
})
export class AppModule {

}