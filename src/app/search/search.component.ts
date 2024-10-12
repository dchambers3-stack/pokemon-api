import { Component } from '@angular/core';
import { CardService } from '../card.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  cardService: CardService = new CardService();


  

}
