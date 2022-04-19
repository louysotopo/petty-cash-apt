import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CajasListComponent } from './cajas/cajas-list/cajas-list.component';
import { DependsComponent } from './depends.component';
import { PaymentsListComponent } from './payments/payments-list/payments-list.component';

const routes: Routes = [
  {
    path:'',  component: DependsComponent,
    children:[
      {path: ':id', component: CajasListComponent },  
      {path: 'misCajas/:ed', component: PaymentsListComponent}      
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependsRoutingModule { }
