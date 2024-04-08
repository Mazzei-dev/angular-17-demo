import { Routes } from '@angular/router';
import { InputDecoratorsPageComponent } from './components/input-decorators-page/input-decorators-page.component';
import { CompositonApiPageComponent } from './components/compositon-api-page/compositon-api-page.component';
import { DynamicComponentOutletPageComponent } from './components/dynamic-component-outlet-page/dynamic-component-outlet-page.component';

export const routes: Routes = [
    { 
        path: 'control-flow-syntax/:responseFormat', 
        loadComponent: () => import('./components/control-flow-syntax-page/control-flow-syntax-page.component').then(module => module.ControlFlowSyntaxPageComponent),
    },
    { path: 'input-decorators', component: InputDecoratorsPageComponent },
    { path: 'composition-api', component: CompositonApiPageComponent },
    { path: 'dynamic-component-outlet', component: DynamicComponentOutletPageComponent },
    {   path: 'router-params', 
        loadComponent: () => import('./components/router-params-page/router-params-page.component').then(module => module.RouterParamsPageComponent),
        data: { 
            title: 'Router params page'
        }
    },
];
