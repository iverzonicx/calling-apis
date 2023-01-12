import { SecondChildComponent } from './second-child/second-child.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { FourthComponent } from './lazy/fourth/fourth.component';
import { ThirdComponent } from './third/third.component';
import { SecondComponent } from './second/second.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent
  },
  {
    path: 'second',
    // path: 'second/:id/:name/:age', // params

    // query params
    // ?name=Jose&age=25
    component: SecondComponent,
    children:[
      {
        path: 'firstChild',
        component: FirstChildComponent
      },
      {
        path: 'secondChild',
        component: SecondChildComponent
      }
    ]
  },
  {
    path: 'third',
    component: ThirdComponent
  },
  {
    path: 'fourth',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
