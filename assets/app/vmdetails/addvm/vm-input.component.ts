import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { VMService } from "../service/vmdetails.service";
import { VMDetail } from "../model/vmdetails.model";



@Component({
    selector:'app-vm-input',
    templateUrl:'./vm-input.component.html'   
})

export class VMInputComponent implements OnInit{
    myForm:FormGroup;
    constructor(private vmService: VMService){}
    ngOnInit() {
          this.myForm = new FormGroup({
           hostName: new FormControl(null,Validators.required),
           osDesc: new FormControl(null,Validators.required),
           applications: new FormControl(null,Validators.required)           
       });
    }   
    
    onSubmit(){
       console.log(this.myForm);
       const appVM = new VMDetail(
            this.myForm.value.hostName,
            this.myForm.value.osDesc,
            this.myForm.value.applications        
       );
     
       this.vmService.addVM(appVM)
         .subscribe(
              data => console.log(data),
              error =>console.log(error)
        );
       this.myForm.reset();
   }
}