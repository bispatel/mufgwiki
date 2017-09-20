import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { Project } from "../model/project.model";
import { ProjectService } from "../service/project.service";


@Component({
    selector:'app-project-input',
    templateUrl:'./project-input.component.html'   
})

export class ProjectInputComponent implements OnInit{
    myForm:FormGroup;
    constructor(private projectService: ProjectService){}
    ngOnInit() {
          this.myForm = new FormGroup({
           projectName: new FormControl(null,Validators.required),
           projectDescription: new FormControl(null,Validators.required),
           longDescription: new FormControl(null,Validators.required),
           technology: new FormControl(null,Validators.required)           
       });
    }   
    
    onSubmit(){
       console.log(this.myForm);
       const project = new Project(
            this.myForm.value.projectName,
            this.myForm.value.projectDescription,
            this.myForm.value.longDescription,
            this.myForm.value.technology
       );
     
       this.projectService.addProject(project)
         .subscribe(
              data => console.log(data),
              error =>console.log(error)
        );
       this.myForm.reset();
   }
}