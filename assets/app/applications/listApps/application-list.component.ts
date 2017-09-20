import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { AppReleaseService } from "../service/application.service";
import { Application } from "../model/application.model";


@Component({
    selector:'app-application-list',
    template:`<table border="1">
    <tr *ngFor="let app of apps">
        <td>{{app.appName}}</td>
        <td>{{app.releaseRef}}</td>
        <td>{{app.estimation}}</td>
        <td>{{app.startDate}}</td>
    </tr>
</table>
    `
})

export class ApplicationListComponent implements OnInit{
    apps: Application[];
    constructor(private appService: AppReleaseService){
     
    }
   
 
    ngOnInit(){
        this.appService.getAllApplications()
            .subscribe(
                (apps:Application[]) =>{
                   this.apps =apps;
                }
            );
        
    }
 

  

}