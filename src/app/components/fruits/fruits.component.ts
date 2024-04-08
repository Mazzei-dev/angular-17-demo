import { Component } from '@angular/core';
import { FruitsService } from '../../services/fruits.service';
import { Fruit } from '../../models/fruit.model';
import { FruitComponent } from '../fruit/fruit.component';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [FruitComponent],
  templateUrl: './fruits.component.html',
  host: {
    class: "flex flex-row flex-wrap w-full grow min-w-0"
  }
})
export class FruitsComponent {

  fruits: Fruit[] = [];

  constructor(private fruitsService: FruitsService) {
    this.fruitsService.getAll().subscribe(fruits => this.fruits = fruits);
  }

}
