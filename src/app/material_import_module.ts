import { NgModule } from '@angular/core';

import {
  MatGridListModule,
  MatDividerModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule
  ],
})
export class MaterialImportsModule { }
