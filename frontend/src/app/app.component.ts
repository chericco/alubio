import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  
public filtro_valor= '';

hardleSearch(value: string) { 
  this.filtro_valor = value;
 }

}
