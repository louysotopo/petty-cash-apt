import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependsRoutingModule } from './depends-routing.module';
import { CajasCreateComponent } from './cajas/cajas-create/cajas-create.component';
import { CajasDeleteComponent } from './cajas/cajas-delete/cajas-delete.component';
import { CajasEditComponent } from './cajas/cajas-edit/cajas-edit.component';
import { CajasListComponent } from './cajas/cajas-list/cajas-list.component';
import { PaymentsCreateComponent } from './payments/payments-create/payments-create.component';
import { PaymentsDeleteComponent } from './payments/payments-delete/payments-delete.component';
import { PaymentsEditComponent } from './payments/payments-edit/payments-edit.component';
import { PaymentsListComponent } from './payments/payments-list/payments-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DependsComponent } from './depends.component';

@NgModule({
  declarations: [
    DependsComponent,
    CajasCreateComponent,
    CajasDeleteComponent,
    CajasEditComponent,
    CajasListComponent,
    PaymentsCreateComponent,
    PaymentsDeleteComponent,
    PaymentsEditComponent,
    PaymentsListComponent,
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [    
  
    CommonModule,
    DependsRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatRadioModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
  ]
})
export class DependsModule { }
