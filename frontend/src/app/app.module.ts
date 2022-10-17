import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatinineCalculatorComponent } from './creatinine-calculator/creatinine-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatinineCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent, CreatinineCalculatorComponent]
})
export class AppModule { }
