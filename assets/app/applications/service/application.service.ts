import { Injectable, EventEmitter } from "@angular/core";
import {Http,Response,Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ErrorService } from "../../errors/error.service";
import { Application } from "../model/application.model";


@Injectable()
export class AppReleaseService {
    private appNames: Application[]=[];
    editedApp = new EventEmitter<Application>();
    constructor(private http: Http,
                private errorService:ErrorService){

    }

    addApplication(app:Application){
      const body =JSON.stringify(app);
      const headers = new Headers({'Content-Type':'application/json'});
      return this.http.post('/application',body,{headers:headers})
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

    getAllApplications(){
        return this.http.get('/application')
        .map((response:Response)=>{
            const apps = response.json().obj;
            let transformeApps: Application[]=[];
            for(let app of apps) {
             transformeApps.push(new Application(
                 app.appName,
                 app.releaseRef,
                 app.estimation,
                 app.startDate
                 )); 
             }
            this.appNames = transformeApps;
            return transformeApps;
        })
         .catch((error:Response) =>{
           this.errorService.handleError(error.json()); 
           return Observable.throw(error.json());
        });    
    }

}