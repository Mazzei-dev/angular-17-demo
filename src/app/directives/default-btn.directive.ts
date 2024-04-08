import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDefaultBtn]',
  standalone: true
})
export class DefaultBtnDirective {

  @HostBinding('class') elementClass = 'bg-secondary text-on-secondary rounded-full px-16 flex items-center justify-center';

  constructor() { }

}
