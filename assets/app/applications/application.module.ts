import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppReleaseInputComponent } from "./addApp/application-input.component";
import { ApplicationListComponent } from "./listApps/application-list.component";
import { appReleaseRouting } from "./application.routing";



@NgModule({
    declarations: [
        AppReleaseInputComponent,
        ApplicationListComponent      
    ],
    imports: [     
              CommonModule,         
              ReactiveFormsModule,
              appReleaseRouting            
            ]  
})
export class AppReleaseModule {

}