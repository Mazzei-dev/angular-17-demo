import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-input-decorator-tester',
  standalone: true,
  imports: [],
  templateUrl: './input-decorator-tester.component.html',
  host: {
    class: "flex flex-col gap-y-8"
  } 
})
export class InputDecoratorTesterComponent {

  @Input({ required: true }) userName!: string;
  @Input({ alias:'user-id', transform: numberAttribute }) id!: number;
  @Input({ transform: booleanAttribute }) status!: boolean;

  constructor() {
    console.log(this.id);
    console.log(this.status);
    console.log(this.id);
  }
}
