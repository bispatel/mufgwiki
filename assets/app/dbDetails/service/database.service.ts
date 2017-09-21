import { Injectable, EventEmitter } from "@angular/core";
import {Http,Response,Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ErrorService } from "../../errors/error.service";
import { DBDetail } from "../model/database.model";




@Injectable()
export class DatabaseService {
    private dbDetails: DBDetail[]=[];

    private _getUrl ="/db";
    private _postUrl ="/db";
    private _updateUrl ="/db/";
    private _deleteUrl = "/db/";
    editedMessage = new EventEmitter<DBDetail>();
    constructor(private http: Http,
                private errorService:ErrorService){

    }

    addDatabase(db:DBDetail){
      //this.messages.push(message);   //Front end code only  
      const body =JSON.stringify(db);    
      const headers = new Headers({'Content-Type':'application/json'});        
      return this.http.post(this._postUrl,body,{headers:headers})
        .map((response:Response)=>{
         const result = response.json();
         const addDatabase =new DBDetail (
             result.obj.appName,
             result.obj.appEnvironment,
             result.obj.serverName,
             result.obj.port,
             result.obj.sid,
             result.obj.userName,
             result.obj.password
            );
         this.dbDetails.push(db);   
         return db;  
        })        
        .catch((error:Response) =>{
            //Handle the error and display in the front end
           this.errorService.handleError(error.json()); 
           return Observable.throw(error.json());
        });
    }

    /*editMessage(message:DBDetail){
         this.editedMessage.emit(message);
    }

    updateMessage(message:DBDetail){
      const body =JSON.stringify(message);
      const headers = new Headers({'Content-Type':'application/json'});
      const token = localStorage.getItem('token') 
                    ? '?token='+localStorage.getItem('token')
                    :'';
      return this.http.patch(this._updateUrl+message.messageId+token,body,{headers:headers})
        .map((response:Response)=>response.json())
         .catch((error:Response) =>{
           this.errorService.handleError(error.json()); 
           return Observable.throw(error.json());
        });
    }*/
    
    getAllDBDetails(){
        return this.http.get(this._getUrl)
        .map((response:Response)=>{
            const dbDetails = response.json().obj;
            let transformedDBS: DBDetail[]=[];
            for(let db of dbDetails) {
             transformedDBS.push(new DBDetail(
                 db.appName,
                 db.appEnvironment,
                 db.serverName,
                 db.port,
                 db.sid,
                 db.userName,
                 db.password
                )); 
             }
            this.dbDetails = transformedDBS;
            return transformedDBS;
        })
         .catch((error:Response) =>{
           this.errorService.handleError(error.json()); 
           return Observable.throw(error.json());
        });
        
    }

    /*deleteMessage(message:Message){
        this.messages.splice(this.messages.indexOf(message),1);//Front end code only
         const token = localStorage.getItem('token') 
                    ? '?token='+localStorage.getItem('token')
                    :'';
        return this.http.delete(this._deleteUrl+message.messageId+token)
        .map((response:Response)=>response.json())
         .catch((error:Response) =>{
           this.errorService.handleError(error.json()); 
           return Observable.throw(error.json());
        });
    }*/
}