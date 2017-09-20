import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Message } from "../model/message.model";
import { MessageService } from "../service/message.service";

@Component({
    selector:'app-message-input',
    templateUrl:'./message-input.component.html'   
})

export class MessageInputComponent implements OnInit{
    message: Message;
    constructor(private messageService: MessageService){}
    onSubmit(form:NgForm){
        console.log(form);
        if(this.message){
          //Edit the message
          this.message.content = form.value.content;
           this.messageService.updateMessage(this.message)
            .subscribe(
                data  => console.log(data),
                error => console.error(error)
            );
          this.message =null;
        }else{
          //Create the message
          const message = new Message(form.value.content,'Max');
          this.messageService.addMessage(message)
            .subscribe(
                data  => console.log(data),
                error => console.error(error)
            );
        }
        
        form.resetForm();
    }

    onClear(form:NgForm){
        this.message =null;
       form.resetForm();
    }
    ngOnInit() {
        this.messageService.editedMessage.subscribe(
         //load it to content field
         (message:Message) =>this.message = message
        );
    }
}