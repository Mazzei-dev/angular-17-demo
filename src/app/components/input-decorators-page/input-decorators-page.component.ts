import { Component } from '@angular/core';
import { genusList } from '../../models/fruit.model';
import { InputDecoratorTesterComponent } from '../input-decorator-tester/input-decorator-tester.component';

@Component({
  selector: 'app-input-decorators-page',
  standalone: true,
  imports: [InputDecoratorTesterComponent],
  templateUrl: './input-decorators-page.component.html',
})
export class InputDecoratorsPageComponent {
  genusList = genusList;
}
