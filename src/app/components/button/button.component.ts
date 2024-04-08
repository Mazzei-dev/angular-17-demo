import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DefaultBtnDirective } from '../../directives/default-btn.directive';
import { TootltipDirective } from '../../directives/tootltip.directive';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  hostDirectives: [
    DefaultBtnDirective,
    {
      directive: TootltipDirective,
      inputs: ["disabledTip"]
    }

  ]
})
export class ButtonComponent {
  @Input() label!: string;
  @Output() action: EventEmitter<any> = new EventEmitter();

  onAction(event: any) {
    this.action.emit(null);
  }
}
