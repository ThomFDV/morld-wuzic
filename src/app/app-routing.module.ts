import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {NotFoundComponentComponent} from "./core/components/not-found-component/not-found-component.component";
import {AdminRoutingModule} from "./admin/admin-routing.module";
import {LoginComponent} from "./core/components/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },{
    path: 'login',
    component: LoginComponent
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
