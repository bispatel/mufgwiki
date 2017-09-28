import { Injectable, EventEmitter } from "@angular/core";
import {Http,Response,Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ErrorService } from "../../errors/error.service";
import { VMDetail } from "../model/vmdetails.model";




@Injectable()
export class VMService {
    private vmList: VMDetail[]=[];
     private _deleteUrl = "/vmDetails/"
    editedApp = new EventEmitter<VMDetail>();
    constructor(private http: Http,
                private errorService:ErrorService){

    }

    addVM(app:VMDetail){
      const body =JSON.stringify(app);
      const headers = new Headers({'Content-Type':'application/json'});
      return this.http.post('/vmDetails',body,{headers:headers})
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

    getAllVM(){
        return this.http.get('/vmDetails')
        .map((response:Response)=>{
            const apps = response.json().obj;
            let transformeVMDetails: VMDetail[]=[];
            for(let app of apps) {
             transformeVMDetails.push(new VMDetail(
                 app.hostName,
                 app.osDesc,
                 app.applications,
                 app._id               
                 )); 
             }
            this.vmList = transformeVMDetails;
            return transformeVMDetails;
        })
         .catch((error:Response) =>{
           this.errorService.handleError(error.json()); 
           return Observable.throw(error.json());
        });    
    }

      deleteVM(vm:VMDetail){
        this.vmList.splice(this.vmList.indexOf(vm),1);//Front end code only         
        return this.http.delete(this._deleteUrl+vm.hostId)
        .map((response:Response)=>response.json())
         .catch((error:Response) =>{
           this.errorService.handleError(error.json()); 
           return Observable.throw(error.json());
        });
    }

}