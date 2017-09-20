import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MessageService } from "./service/message.service";
import { Message } from "./model/message.model";


@Component({
    selector:'app-message',
    templateUrl:'./message.component.html',
    styles:[`
    .author {
        display:inline-block;
        font-style:italic;
        font-size:12px;
        width:80%
    }
    .config {
        display:inline-block;
        text-align:right;
        font-size:12px;
        width:19%
    }        
   `]//,
//  inputs:['message']
})

export class MessageComponet{
    //Alias Name
    //@Input('inputMessage') message:Message;
    color = 'green';
constructor(private messageService: MessageService){}
    @Input() message:Message;
    //@Output() editClicked = new EventEmitter<string>();
    onEdit(){
        //emit an event
        this.messageService.editMessage(this.message);
    }
    onDelete(){
        this.messageService.deleteMessage(this.message)
        .subscribe(
            result =>console.log(result)
        );
    }

    belongsToUser(){
        return localStorage.getItem('userId')==this.message.userId;
    }
}