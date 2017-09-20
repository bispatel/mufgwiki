import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MessagesComponent } from "./messsages.component";
import { MessageService } from "./service/message.service";
import { MessageListComponent } from "./list/message-list.component";
import { MessageComponet } from "./message.component";
import { MessageInputComponent } from "./input/message-Input.component";


@NgModule({
    declarations: [
        MessageComponet,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent        
    ],
    imports: [     
              CommonModule,         
              FormsModule           
            ],
    providers:[MessageService]   
})
export class MessageModule {

}