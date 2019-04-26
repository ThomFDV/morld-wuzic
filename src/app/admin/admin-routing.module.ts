import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminHomeComponent} from "./component/admin-home/admin-home.component";
import {AuthGuard} from "./guard/auth/auth.guard";

const routes: Routes = [
    {
        path: 'admin',
        component: AdminHomeComponent,
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
