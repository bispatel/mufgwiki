import { Injectable, EventEmitter } from "@angular/core";
import {Http,Response,Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ErrorService } from "../../errors/error.service";
import { AppLink } from "../model/appLink.model";


@Injectable()
export class AppLinkService {
    private appLinkNames: AppLink[]=[];
    editedApp = new EventEmitter<AppLink>();
    constructor(private http: Http,
                private errorService:ErrorService){

    }

    addAppLink(app:AppLink){
      const body =JSON.stringify(app);
      const headers = new Headers({'Content-Type':'application/json'});
      return this.http.post('/application/appLink',body,{headers:headers})
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

    getAllAppLinks(){
        return this.http.get('/application/appLink')
        .map((response:Response)=>{
            const apps = response.json().obj;
            let transformeAppLinks: AppLink[]=[];
            for(let app of apps) {
             transformeAppLinks.push(new AppLink(
                 app.location,
                 app.appName,
                 app.envName,
                 app.description,
                 app.url
                 )); 
             }
            this.appLinkNames = transformeAppLinks;
            return transformeAppLinks;
        })
         .catch((error:Response) =>{
           this.errorService.handleError(error.json()); 
           return Observable.throw(error.json());
        });    
    }

}