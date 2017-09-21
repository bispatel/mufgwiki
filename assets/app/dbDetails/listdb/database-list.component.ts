import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { DBDetail } from "../model/database.model";
import { DatabaseService } from "../service/database.service";

@Component({
    selector:'app-db-list',
    template:`<table class="table">
                    <tr>
                        <th>#</th>
                        <th>Application Name</th>
                        <th>Environment</th> 
                        <th>Server Name</th>  
                        <th>Port</th>
                        <th>SID</th> 
                        <th>User Name</th>  
                        <th>Password</th>                                                
                    </tr>
                    <tr *ngFor="let app of apps; let i = index">
                        <td>{{i + 1}}</td>
                        <td>{{app.appName}}</td>
                        <td>{{app.appEnvironment}}</td>
                        <td>{{app.serverName}}</td>  
                        <td>{{app.port}}</td>
                        <td>{{app.sid}}</td>
                        <td>{{app.userName}}</td>
                        <td>{{app.password}}</td>                                         
                    </tr>
                </table>`
})

export class DBListComponent implements OnInit{
    apps: DBDetail[];
    constructor(private appService: DatabaseService){
     
    }
   
 
    ngOnInit(){
        this.appService.getAllDBDetails()
            .subscribe(
                (apps:DBDetail[]) =>{
                   this.apps =apps;
                }
            );
        
    }
}
