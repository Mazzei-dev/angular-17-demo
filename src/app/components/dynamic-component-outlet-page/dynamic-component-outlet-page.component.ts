import { Component } from '@angular/core';
import { TypeAComponent } from '../type-a/type-a.component';
import { TypeBComponent } from '../type-b/type-b.component';
import { TypeCComponent } from '../type-c/type-c.component';
import { ComponentLoaderComponent } from '../component-loader/component-loader.component';
import { CommonModule } from '@angular/common';
import { DefaultBtnDirective } from '../../directives/default-btn.directive';

type AllowedComponents = TypeAComponent | TypeBComponent | TypeCComponent;
export type DynamicComponentConfig = {component: any, inputs: any };

@Component({
  selector: 'app-dynamic-component-outlet-page',
  standalone: true,
  imports: [
    ComponentLoaderComponent, 
    CommonModule, 
    TypeAComponent, 
    TypeBComponent, 
    TypeCComponent, 
    DefaultBtnDirective
  ],
  templateUrl: './dynamic-component-outlet-page.component.html',
  host: {
    class: "flex flex-col w-full"
  }
})
export class DynamicComponentOutletPageComponent {

  config: DynamicComponentConfig | undefined;

  onLoadA() {
    this.config = {
      component: TypeAComponent,
      inputs: {
        message: "Caricato component A"
      }
    }
  }

  onLoadB() {
    this.config = {
      component: TypeBComponent,
      inputs: {
        days: ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Vemerdì", "Sabato", "Domenica"]
      }
    }
  }

  onLoadC() {
    this.config = {
      component: TypeCComponent,
      inputs: {
        obj: {
          name: "mario",
          age: 28
        }
      }
    }
  }
}
