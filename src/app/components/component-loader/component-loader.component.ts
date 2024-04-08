import { Component, Input } from '@angular/core';
import { DynamicComponentConfig } from '../dynamic-component-outlet-page/dynamic-component-outlet-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-loader.component.html',
})
export class ComponentLoaderComponent {
  @Input({ required: true}) config!: DynamicComponentConfig;
}
