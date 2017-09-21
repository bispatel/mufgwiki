import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { VMDetail } from "../model/vmdetails.model";
import { VMService } from "../service/vmdetails.service";



@Component({
    selector:'app-vm-list',
    template:`<table class="table">
                    <tr>
                        <th>#</th>
                        <th>HostName</th>
                        <th>OS Name </th> 
                        <th>Applications</th>                       
                    </tr>
                    <tr *ngFor="let app of apps; let i = index">
                        <td>{{i + 1}}</td>
                        <td>{{app.hostName}}</td>
                        <td>{{app.osDesc}}</td>
                        <td>{{app.applications}}</td>                      
                    </tr>
                </table>`
})

export class VMListComponent implements OnInit{
    apps: VMDetail[];
    constructor(private appService: VMService){
     
    }
   
 
    ngOnInit(){
        this.appService.getAllVM()
            .subscribe(
                (apps:VMDetail[]) =>{
                   this.apps =apps;
                }
            );
        
    }
 

  

}