
import { Injectable, EventEmitter } from "@angular/core";
import {Http,Response,Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Message } from "../model/message.model";
import { ErrorService } from "../../errors/error.service";



@Injectable()
export class MessageService {
    private messages: Message[]=[];

    private _getUrl ="/message";
    private _postUrl ="/message";
    private _updateUrl ="/message/";
    private _deleteUrl = "/message/";
    editedMessage = new EventEmitter<Message>();
    constructor(private http: Http,
                private errorService:ErrorService){

    }

    addMessage(message:Message){
      //this.messages.push(message);   //Front end code only  
      const body =JSON.stringify(message);
      const headers = new Headers({'Content-Type':'application/json'});
      const token = localStorage.getItem('token') 
                    ? '?token='+localStorage.getItem('token')
                    :'';
      return this.http.post(this._postUrl+token,body,{headers:headers})
        .map((response:Response)=>{
         const result = response.json();
         const message =new Message (
             result.obj.content,
             result.obj.user.firstName,
             result.obj._id,
             result.obj.user._id);
         this.messages.push(message);   
         return message;  
        })        
        .catch((error:Response) =>{
            //Handle the error and display in the front end
           this.errorService.handleError(error.json()); 
           return Observable.throw(error.json());
        });
    }

    editMessage(message:Message){
         this.editedMessage.emit(message);
    }

    updateMessage(message:Message){
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
    }
    
    getMessages(){
        return this.http.get(this._getUrl)
        .map((response:Response)=>{
            const messages = response.json().obj;
            let transformedMessages: Message[]=[];
            for(let message of messages) {
             transformedMessages.push(new Message(
                 message.content,
                 message.user.firstName,
                 message._id,
                 message.user._id)); 
             }
            this.messages = transformedMessages;
            return transformedMessages;
        })
         .catch((error:Response) =>{
           this.errorService.handleError(error.json()); 
           return Observable.throw(error.json());
        });
        
    }

    deleteMessage(message:Message){
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
    }
}