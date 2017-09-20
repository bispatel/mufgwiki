import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { AppLink } from "../model/appLink.model";
import { AppLinkService } from "../service/appLink.service";

@Component({
    selector:'app-Link-input',
    templateUrl:'./appLink-input.component.html'   
})

export class AppLinkInputComponent implements OnInit{
    myForm:FormGroup;
    constructor(private appLinkService: AppLinkService){}
    ngOnInit() {
          this.myForm = new FormGroup({
           location: new FormControl(null,Validators.required),
           appName: new FormControl(null,Validators.required),
           envName: new FormControl(null,Validators.required),
           description: new FormControl(null,Validators.required) ,
           url: new FormControl(null,Validators.required) 
       });
    }   
    
    onSubmit(){
       console.log(this.myForm);
       const appLink = new AppLink(
            this.myForm.value.location,
            this.myForm.value.appName,
            this.myForm.value.envName,
            this.myForm.value.description,
            this.myForm.value.url
       );
     
       this.appLinkService.addAppLink(appLink)
         .subscribe(
              data => console.log(data),
              error =>console.log(error)
        );
       this.myForm.reset();
   }
}