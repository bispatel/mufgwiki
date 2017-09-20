import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { AppLinkService } from "../service/appLink.service";
import { AppLink } from "../model/appLink.model";


@Component({
    selector:'app-Link-list',
    template:`<table class="table">
                    <tr>
                        <th>#</th>
                        <th>Application</th>
                        <th>Environment </th> 
                        <th>Description</th>
                        <th>Link</th>
                    </tr>
                    <tr *ngFor="let app of apps; let i = index">
                        <td>{{i + 1}}</td>
                        <td>{{app.appName}}</td>
                        <td>{{app.envName}}</td>
                        <td>{{app.description}}</td>
                        <td>{{app.url}}</td>
                    </tr>
                </table>`
})

export class AppLinkListComponent implements OnInit{
    apps: AppLink[];
    constructor(private appService: AppLinkService){
     
    }
   
 
    ngOnInit(){
        this.appService.getAllAppLinks()
            .subscribe(
                (apps:AppLink[]) =>{
                   this.apps =apps;
                }
            );
        
    }
 

  

}