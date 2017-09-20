import { Injectable, EventEmitter } from "@angular/core";
import {Http,Response,Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Project } from "../model/project.model";
import { ErrorService } from "../../errors/error.service";


@Injectable()
export class ProjectService {
    private projects: Project[]=[];
    editedProject = new EventEmitter<Project>();
    constructor(private http: Http,
                private errorService:ErrorService){

    }

    addProject(project:Project){
      const body =JSON.stringify(project);
      const headers = new Headers({'Content-Type':'application/json'});
      return this.http.post('/project',body,{headers:headers})
        .map((response:Response)=>{
         const result = response.json();
        return result;  
        })        
        .catch((error:Response) =>{
            //Handle the error and display in the front end
           this.errorService.handleError(error.json()); 
           return Observable.throw(error.json());
        });
    }

    getAllProjects(){
        return this.http.get('/project')
        .map((response:Response)=>{
            const projects = response.json().obj;
            let transformeProjects: Project[]=[];
            for(let project of projects) {
             transformeProjects.push(new Project(
                 project.projectName,
                 project.projectDescription,
                 project.longDescription,
                 project.technology
                 )); 
             }
            this.projects = transformeProjects;
            return transformeProjects;
        })
         .catch((error:Response) =>{
           this.errorService.handleError(error.json()); 
           return Observable.throw(error.json());
        });    
    }

}