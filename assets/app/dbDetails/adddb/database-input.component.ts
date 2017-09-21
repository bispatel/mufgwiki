import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DBDetail } from "../model/database.model";
import { DatabaseService } from "../service/database.service";


@Component({
    selector:'app-database-input',
    templateUrl:'./database-input.component.html'   
})

export class DBInputComponent implements OnInit{
     databases: DBDetail[];
    myForm:FormGroup; 
    constructor(private dbService: DatabaseService,private router : Router){}

onSubmit(){
       console.log(this.myForm);
       const db = new DBDetail(this.myForm.value.appName,
                               this.myForm.value.appEnvironment,
                               this.myForm.value.serverName,
                               this.myForm.value.port,
                               this.myForm.value.sid,
                               this.myForm.value.userName,
                               this.myForm.value.password
    );
       this.dbService.addDatabase(db)
           .subscribe(
                data => console.log(data),
                error =>console.log(error)
           );
        this.myForm.reset();
   }

    ngOnInit(){
            this.myForm = new FormGroup({
             appName: new FormControl(null,Validators.required),
             appEnvironment: new FormControl(null,Validators.required),
             serverName: new FormControl(null,Validators.required),
             port: new FormControl(null,Validators.required),
             sid: new FormControl(null,Validators.required),
             userName: new FormControl(null,Validators.required),
             password: new FormControl(null,Validators.required)
       });
   
    }
}