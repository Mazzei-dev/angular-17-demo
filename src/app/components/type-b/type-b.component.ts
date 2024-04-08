import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type-b',
  standalone: true,
  imports: [],
  template: `
    <h1>Component B</h1>
    {{ days }}`,
})
export class TypeBComponent {
  @Input() days: string[] = [];
}
