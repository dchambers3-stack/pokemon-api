import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

   http = inject(HttpClient);


   getCard() {
    
    const url = `https://api.pokemontcg.io/v2/cards/`
    return this.http.get(url)
   
     };


     
    

     


    
   }

