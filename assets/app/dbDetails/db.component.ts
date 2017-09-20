import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { AppDb } from "./db.model";
import { DatabaseService } from "./db.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
    selector:'app-database-list',
    templateUrl:'./db.component.html'
})

export class DatabaseComponent implements OnInit{
    databases: AppDb[];
    myForm:FormGroup; 
    constructor(private dbService: DatabaseService,private router : Router){}



onSubmit(){
       console.log(this.myForm);
       const db = new AppDb( this.myForm.value.appName,
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
       /* this.dbService.getAllDBDetails()
            .subscribe(
                (db:AppDb[]) =>{
                   this.databases =db;
                }
            );*/
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