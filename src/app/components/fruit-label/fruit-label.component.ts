import { Component, Input } from '@angular/core';
import { NO_VALUE } from '../../models/fruit.model';

@Component({
  selector: 'app-fruit-label',
  standalone: true,
  imports: [],
  templateUrl: './fruit-label.component.html',
  host: {
    class: "flex flex-col"
  }
})
export class FruitLabelComponent {

  @Input() label: string | typeof NO_VALUE = NO_VALUE;
  @Input() value: string | typeof NO_VALUE = NO_VALUE;
}
