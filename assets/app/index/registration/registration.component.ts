import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../auth/model/user.model";
import { AuthService } from "../../auth/service/auth.service";


@Component({
    selector: 'app-registration',
    templateUrl:'./registration.component.html'
    })
export class RegistrationComponent implements OnInit{

   myForm:FormGroup;

   constructor(private authService : AuthService,
               private router     : Router){}
   onSubmit(){
       console.log(this.myForm);
       const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName
       );
       this.authService.signUp(user)
           .subscribe(
                data =>{
                     console.log(data);
                     this.router.navigateByUrl('/index');
                } ,
                error =>console.log(error)
           );
       this.myForm.reset();
   }
   ngOnInit(){
       this.myForm = new FormGroup({
           firstName: new FormControl(null,Validators.required),
           lastName: new FormControl(null,Validators.required),
           email: new FormControl(null,[
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
           ]),
           password: new FormControl(null,Validators.required)
       });
   }
}