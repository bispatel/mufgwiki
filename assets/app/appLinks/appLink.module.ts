import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppLinkListComponent } from "./listLink/appLink-list.component";
import { AppLinkInputComponent } from "./addLink/appLink-input.component";
import { appLinksRouting } from "./appLink.routing";



@NgModule({
    declarations: [
        AppLinkInputComponent,
        AppLinkListComponent      
    ],
    imports: [     
              CommonModule,         
              ReactiveFormsModule,
              appLinksRouting            
            ]  
})
export class AppLinkModule {

}