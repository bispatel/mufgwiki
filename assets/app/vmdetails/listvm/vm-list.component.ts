import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { VMDetail } from "../model/vmdetails.model";
import { VMService } from "../service/vmdetails.service";

import { VMDialogComponent } from "../vmdetails.dialogComponent";


@Component({
    selector:'app-vm-list',
    template:`
<div class="container">
    <div class="table-responsive">
        <table class="table table-bordered">
                    <tr>
                        <th>#</th>
                        <th>HostName</th>
                        <th>OS Name </th> 
                        <th>Applications</th>  
                        <th>Action</th>                     
                    </tr>
                    <tr *ngFor="let app of apps; let i = index">
                        <td>{{i + 1}}</td>
                        <td>{{app.hostName}}</td>
                        <td>{{app.osDesc}}</td>
                        <td>{{app.applications}}</td>   
                        <td>
                        <a class="btn btn-primary">Detail</a>
                        <a (click)="onEdit(app)" class="btn btn-success">Edit</a>
                        <a (click)="onDelete(app)" class="btn btn-danger">Delete</a>
                    </td>                   
                    </tr>
                 </table>
    </div>
</div>

 <!-- Modal -->
  <div class="modal fade" [style.display]="showModal ? 'block' : 'none'">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>{{message}}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>






`
})

export class VMListComponent implements OnInit{
    apps: VMDetail[];
    constructor(private appService: VMService){
     
    }
   
    message:string;
    showModal: boolean=false;
    ngOnInit(){
        this.appService.getAllVM()
            .subscribe(
                (apps:VMDetail[]) =>{
                   this.apps =apps;
                }
            );
        
    }
 
   onDelete(vm:VMDetail){
        this.appService.deleteVM(vm)
        .subscribe(
            result =>console.log(result)
        );
    }
  
    onEdit(vm:VMDetail){
        this.message=vm.applications;
        this.showModal = true;        
    }

}