import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { MatCardModule, MatButtonModule } from '@angular/material';
import { MomentModule } from 'ngx-moment';


@NgModule({
  declarations: [],
  imports: [
    MatCardModule, MatButtonModule, MomentModule
  ],
  exports: [
  	MatCardModule, MatButtonModule, MomentModule
  ]
})
export class SharedModule { }
