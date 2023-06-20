import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { CardModel } from "./card.model";

@Injectable(
    {providedIn: 'root'}
)
export class CardsService{
    private baseUrl:string = "https://atf-app-98c14-default-rtdb.firebaseio.com/";
    private cardsOneEndpoint:string = "cards_1.json";
    private cardsTwoEndpoint:string = "cards_2.json";

    constructor(private http:HttpClient){

    }

    getCardsOne(){
        return this.http.get<CardModel []>(this.baseUrl + this.cardsOneEndpoint);
    }

    getCardsTwo(){
        return this.http.get<CardModel []>(this.baseUrl + this.cardsTwoEndpoint);
    }
}