import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type-c',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Component C</h1>
    {{ obj | json }}`,
})
export class TypeCComponent {
  @Input() obj!: { name: string, age: number };
}
