import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Message } from "../model/message.model";
import { MessageService } from "../service/message.service";

@Component({
    selector:'app-message-list',
    template:`
    <div class="col-md-8 col-md-offset-2">
     <app-message [message]='message'
                 *ngFor = "let message of messages " ></app-message> 
    </div>    
    `
})

export class MessageListComponent implements OnInit{
    messages: Message[];/*= [
        new Message('A message','Bishwajit'),
        new Message('A New Message','Satyajit'),
        new Message('A Third Message','Abhijit')
    ]*/
    constructor(private messageService: MessageService){}

    ngOnInit(){
        this.messageService.getMessages()
            .subscribe(
                (message:Message[]) =>{
                   this.messages =message;
                }
            );
    }
}