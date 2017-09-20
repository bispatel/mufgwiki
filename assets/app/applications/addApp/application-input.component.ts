import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { AppReleaseService } from "../service/application.service";
import { Application } from "../model/application.model";

@Component({
    selector:'app-application-input',
    templateUrl:'./application-input.component.html'   
})

export class AppReleaseInputComponent implements OnInit{
    myForm:FormGroup;
    constructor(private appService: AppReleaseService){}
    ngOnInit() {
          this.myForm = new FormGroup({
           appName: new FormControl(null,Validators.required),
           releaseRef: new FormControl(null,Validators.required),
           estimation: new FormControl(null,Validators.required),
           startDate: new FormControl(null,Validators.required)           
       });
    }   
    
    onSubmit(){
       console.log(this.myForm);
       const application = new Application(
            this.myForm.value.appName,
            this.myForm.value.releaseRef,
            this.myForm.value.estimation,
            this.myForm.value.startDate
       );
     
       this.appService.addApplication(application)
         .subscribe(
              data => console.log(data),
              error =>console.log(error)
        );
       this.myForm.reset();
   }
}