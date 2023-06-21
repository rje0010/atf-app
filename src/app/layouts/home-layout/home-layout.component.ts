import { Component } from '@angular/core';
import { CardModel } from 'src/app/cards/card.model';
import { CardsService } from 'src/app/cards/cards.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  cards1: CardModel [] = [];
  cards2: CardModel [] = [];

  constructor(private cardsService:CardsService){
    
    this.cardsService.cards1.subscribe((data: CardModel []) => {
      console.log("Fetching Cards...");
      console.log(data);
      for (var card of data){
        this.cards1.push(card);
      }
    });

    this.cardsService.cards2.subscribe((data: CardModel []) => {
      console.log("Fetching Cards...");
      console.log(data);
      for (var card of data){
        this.cards2.push(card);
      }
    });
  }
}
