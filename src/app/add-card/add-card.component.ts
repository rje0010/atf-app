import { Component, OnInit } from '@angular/core';
import { CardModel } from '../cards/card.model';
import { CardsService } from '../cards/cards.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  constructor(private ps:CardsService){

  }

  ngOnInit(): void {
    
  }

  addCard(card:CardModel){
    console.log(card)
    this.ps.addCard(card);
  }
}
