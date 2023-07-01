import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse";

const API_KEY = environment.firebase.apiKey

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    baseUrl:string = "Https://identitytoolkit.googleapis.com/v1/accounts"
    signUpEndpoint:string = "signUp"
    loginEndpoint:string = "signInWithPassword"

    public constructor(private http:HttpClient){

    }

    public signup(email:string, password:string){
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken":true
        }

        return this.http.post<AuthResponse>(this.baseUrl + ':' +this.signUpEndpoint + '?key=' + API_KEY, requestBody)
    }

    public login(email:string, password:string){
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken":true
        }

        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.loginEndpoint + '?key=' + API_KEY, requestBody)
    }
}
