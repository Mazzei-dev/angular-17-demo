import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-compositon-api-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './compositon-api-page.component.html',
  host: {
    class: "flex gap-x-16 h-32"
  }
})
export class CompositonApiPageComponent {

  onClick() {
    alert("Hello world");
  }

}
