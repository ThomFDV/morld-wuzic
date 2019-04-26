import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./core/component/home/home.component";
import {AdminHomeComponent} from "./admin/component/admin-home/admin-home.component";
import {NotFoundComponentComponent} from "./core/component/not-found-component/not-found-component.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminHomeComponent
  },
  {
    path: 'nawak',
    component: NotFoundComponentComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'nawak'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
