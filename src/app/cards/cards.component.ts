import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() img: string;
  @Input() imgTitle: string;
  @Input() imgText: string;

  constructor(){
    this.img="No Image Found";
    this.imgTitle="No Title Found";
    this.imgText="No Text Found"
  }

  ngOnInit(): void{
  
  }

}
