import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./core/component/home/home.component";
import {NotFoundComponentComponent} from "./core/component/not-found-component/not-found-component.component";
import {AdminRoutingModule} from "./admin/admin-routing.module";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'nawak',
    component: NotFoundComponentComponent
  },
  {
    path: '**',
    redirectTo: 'nawak'
  }
];


@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      AdminRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
