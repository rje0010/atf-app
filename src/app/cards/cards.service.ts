import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Injectable } from "@angular/core"
import { CardModel } from "./card.model";
import { Observable } from "rxjs";

@Injectable(
    {providedIn: 'root'}
)
export class CardsService{
    cards1: Observable<CardModel []>
    cards2: Observable<CardModel []>
    private baseUrl:string = "https://atf-app-98c14-default-rtdb.firebaseio.com/";
    private cardsOneEndpoint:string = "cards_1.json";
    private cardsTwoEndpoint:string = "cards_2.json";

    constructor(private db:AngularFireDatabase){
        this.cards1 = this.db.list<CardModel>("cards_1").valueChanges();
        this.cards2 = this.db.list<CardModel>("cards_2").valueChanges();
    }

    addCard(card:CardModel){
        this.db.list<CardModel>("cards_2").push(card);
    }
}