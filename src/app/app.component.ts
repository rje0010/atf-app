import { Component } from '@angular/core';
import { CardModel } from './cards/card.model';
import { mock_list } from './cards/mock_list';
import { mock_list2 } from './cards/mock_list2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title="atf-app"

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
