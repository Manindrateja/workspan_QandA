import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CommonService } from './common.service';

import { Router } from './router.module';
import { RouterModule } from '@angular/router';


import { StoreModule } from '@ngrx/store';
import { QuestionsReducer, AnswersReducer } from './_reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ 
    	questions: QuestionsReducer,
      answers: AnswersReducer
    }),
    Router
  ],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [ CommonService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
