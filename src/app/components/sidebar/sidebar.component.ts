import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive ],
  templateUrl: './sidebar.component.html',
  host: {
    class: "flex flex-col w-256 h-full min-h-0 bg-primary-variant shrink-0"
  }
})
export class SidebarComponent {

}
