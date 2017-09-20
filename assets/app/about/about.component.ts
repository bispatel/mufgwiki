import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/service/auth.service";
import { AboutService } from "./about.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { About } from "./about.model";

@Component({
selector:'app-about',
templateUrl:'./about.component.html'
})

export class AboutComponent  implements OnInit{
      myForm:FormGroup; 
      constructor(private aboutService: AboutService,
                  private router: Router){}
                  
      onSubmit(){
       console.log(this.myForm);
       const about = new About(this.myForm.value.header,
                            this.myForm.value.content                              
                           );
       this.aboutService.addAbout(about)
           .subscribe(
                data => console.log(data),
                error =>console.log(error)
           );
        this.myForm.reset();
      }

      ngOnInit(){     
         this.myForm = new FormGroup({
             header: new FormControl(null,Validators.required),
             content: new FormControl(null,Validators.required)            
       });   
    }
}