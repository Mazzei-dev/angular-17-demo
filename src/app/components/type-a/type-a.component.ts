import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type-a',
  standalone: true,
  imports: [],
  template: `
    <h1>Component A</h1>
    {{ message }}`,
})
export class TypeAComponent {
  @Input() message: string | undefined;
}
