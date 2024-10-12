import { Component, inject, OnInit, signal } from '@angular/core';
import { CardService } from '../card.service';
import { single, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  
  isLoading = true;

   cardService = inject(CardService);
   cardData = signal<Card[]>([]);
   data = this.cardData
   private subscription = new Subscription()
   filteredData = signal<Card[]>([])
   searchInput = ''

  ngOnInit(): void {
    this.subscription = this.cardService.getCard().subscribe((response: any)=>{
      this.cardData.set(response.data);
      this.filteredData.set(response.data);
      this.isLoading = false;
    }, (error: any) =>{
      console.log('Error fetching card data.', error);
      
    })

    
     
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
 
  }

  
  // Inside your CardComponent
filterCards() {
  const query = this.searchInput.toLowerCase();
  if (query) {
      const filtered = this.cardData().filter((card: Card) =>
          card.name.toLowerCase().includes(query)
      );
      this.filteredData.set(filtered);
  } else {
      this.filteredData.set(this.cardData()); // Show all cards if the input is empty
      
  }
  this.searchInput = ''
  
}









  

}


