import { Injectable, EventEmitter } from "@angular/core";
import {Http,Response,Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ErrorService } from "../errors/error.service";
import { About } from "./about.model";


@Injectable()
export class AboutService {
    private aboutDetails: About[]=[];
    private _postUrl ="/about";        
    editAbout = new EventEmitter<About>();
    constructor(private http: Http,
                private errorService:ErrorService){

    }
    addAbout(db:About){     
      const body =JSON.stringify(db);      
      const headers = new Headers({'Content-Type':'application/json'});        
      return this.http.post(this._postUrl,body,{headers:headers})
        .map((response:Response)=>{
         const result = response.json();
         const addAbout =new About (
             result.obj.header,
             result.obj.content
            );
         this.aboutDetails.push(db);   
         return db;  
        })        
        .catch((error:Response) =>{
            //Handle the error and display in the front end
           this.errorService.handleError(error.json()); 
           return Observable.throw(error.json());
        });
    }  
}