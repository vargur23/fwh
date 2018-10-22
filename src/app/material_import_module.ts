import { NgModule } from '@angular/core';

import {MatDividerModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [MatDividerModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule],
  exports: [MatDividerModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule],
})
export class MaterialImportsModule { }
