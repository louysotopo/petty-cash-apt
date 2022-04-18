import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins.component';
import { CajasListComponent } from './cajas/cajas-list/cajas-list.component';
import { PaymentsCreateComponent } from './payments/payments-create/payments-create.component';
import { PaymentsListComponent } from './payments/payments-list/payments-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  {
    path:'',
    component: AdminsComponent,
    children:[
      {path:'',component:UsersListComponent },
      {path: 'user/:id/cajas',component: CajasListComponent},
      {path:'user/:id/caja/:ed',component:PaymentsListComponent}
      

    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
