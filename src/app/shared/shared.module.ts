import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatDividerModule } from '@angular/material';
import { MomentModule } from 'ngx-moment';


@NgModule({
  declarations: [],
  imports: [
    MatCardModule, MatButtonModule, MomentModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatDividerModule
  ],
  exports: [
  	MatCardModule, MatButtonModule, MomentModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatDividerModule
  ]
})
export class SharedModule { }
