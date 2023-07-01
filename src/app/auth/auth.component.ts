import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from './auth.service';
import { AuthResponse } from './authResponse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public buttonClicked!:string;
  private authObservable!: Observable<AuthResponse> 

  constructor(private authService:AuthService){

  }
  
  public onSubmit(data: NgForm){
    console.log("Button Clicked: " + this.buttonClicked)
    console.log(data.value)
    
    if(this.buttonClicked == 'signup'){
      this.authObservable = this.authService.signup(data.value.email, data.value.password);
    } else if (this.buttonClicked == 'login'){
      this.authObservable = this.authService.login(data.value.email, data.value.password);
    }
    
    
    
    this.authObservable.subscribe(
      (data:AuthResponse) =>{
        alert("Action Successful");
      }, error =>{
        alert(error.error.error.message);
      }
    )
    data.resetForm()
  }
}
