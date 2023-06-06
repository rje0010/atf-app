import { Component } from '@angular/core';
import { mock_list } from 'src/app/cards/mock_list';
import { mock_list2 } from 'src/app/cards/mock_list2';
import { CardModel } from 'src/app/cards/card.model';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  cards1: CardModel [] = [];
  cards2: CardModel [] = [];

  constructor(){
    
    for (var card of mock_list){
      console.log(card);
      this.cards1.push(card);
    }

    for (var card of mock_list2){
      console.log(card);
      this.cards2.push(card);
    }
  }
}
