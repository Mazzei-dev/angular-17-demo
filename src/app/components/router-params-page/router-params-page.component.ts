import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-router-params-page',
  standalone: true,
  imports: [],
  templateUrl: './router-params-page.component.html',
})
export class RouterParamsPageComponent {
  @Input() title = '';
}
