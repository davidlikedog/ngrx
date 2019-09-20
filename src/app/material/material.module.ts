import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatTableModule,
  ],
})
export class MaterialModule { }
