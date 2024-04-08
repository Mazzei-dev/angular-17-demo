import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlowSyntaxPageComponent } from './components/control-flow-syntax-page/control-flow-syntax-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InputDecoratorsPageComponent } from './components/input-decorators-page/input-decorators-page.component';
import { RouterParamsPageComponent } from './components/router-params-page/router-params-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    SidebarComponent, 
    ControlFlowSyntaxPageComponent, 
    InputDecoratorsPageComponent,
    RouterParamsPageComponent
  ],
  templateUrl: './app.component.html',
  host: {
    class: ""
  }
})
export class AppComponent {
  title = 'demo';


}
