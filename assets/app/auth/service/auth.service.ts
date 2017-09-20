import { Injectable } from "@angular/core";

import { Http,Headers,Response } from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ErrorService } from "../../errors/error.service";
import { User } from "../model/user.model";



@Injectable()
export class AuthService{

    private _signUpUrl = "/user";
    private _signInUrl = "/user/signin"
constructor(private _http:Http,
            private errorService:ErrorService){}
            
    signUp(user:User){
      const body =JSON.stringify(user);     
      const headers = new Headers({'Content-Type':'application/json'});
      return this._http.post(this._signUpUrl,body,{headers:headers})
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

    signin(user:User){
      const body =JSON.stringify(user);     
      const headers = new Headers({'Content-Type':'application/json'});
      return this._http.post(this._signInUrl,body,{headers:headers})
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

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token')!==null;
    }
}