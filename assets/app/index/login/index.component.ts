import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
 
import { Router } from "@angular/router";
import { AuthService } from "../../auth/service/auth.service";
import { User } from "../../auth/model/user.model";




@Component({
selector:'app-index',
templateUrl:'./index.component.html'
})
export class IndexComponent implements OnInit {
   myForm:FormGroup;
    constructor(private authService: AuthService,
                private router     : Router){}
   onSubmit(){
       console.log(this.myForm);
       const user = new User(this.myForm.value.email,this.myForm.value.password);      
       this.authService.signin(user)
           .subscribe(
               data=>{
                    localStorage.setItem('token',data.token);
                    localStorage.setItem('userId',data.userId);
                    this.router.navigateByUrl('/success');
               },
               error =>console.error(error)
           )
        this.myForm.reset();
   }

   signUp(){     
     this.router.navigateByUrl('/signUp');
   }

   ngOnInit(){
       this.myForm = new FormGroup({
           email: new FormControl(null,[
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
           ]),
           password: new FormControl(null,Validators.required)
       });
   }
}