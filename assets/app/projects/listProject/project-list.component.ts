import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Project } from "../model/project.model";
import { ProjectService } from "../service/project.service";


@Component({
    selector:'app-project-list',
    template:`
     <article class="panel panel-default" *ngFor ="let project of projects" >
              <div class="panel-body">
                  {{project.projectName}}
              </div>
              <footer class="panel-footer">
                  <div class="author">
                      {{project.projectDescription}}
                  </div>                 
                  <div class="author">
                      {{project.technology}}
                  </div> 
              </footer>
            </article> 
    `
})

export class ProjectListComponent implements OnInit{
    projects: Project[];
    constructor(private projectService: ProjectService){}

    ngOnInit(){
        this.projectService.getAllProjects()
            .subscribe(
                (projects:Project[]) =>{
                   this.projects =projects;
                }
            );
    }
}