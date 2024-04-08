import { Component, Input } from '@angular/core';
import { Fruit, NO_VALUE } from '../../models/fruit.model';
import { FruitLabelComponent } from '../fruit-label/fruit-label.component';

@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [FruitLabelComponent],
  templateUrl: './fruit.component.html',
  host: {
    class: "flex flex-col w-1/3 bg-primary-variant"
  }
})
export class FruitComponent {

  @Input() item: Fruit | typeof NO_VALUE = NO_VALUE;

  NO_VALUE = NO_VALUE;

  constructor() {}

  
  isNotEmpty(v: Fruit | typeof NO_VALUE): v is Fruit {
    return this.item !== NO_VALUE;
  }
}
