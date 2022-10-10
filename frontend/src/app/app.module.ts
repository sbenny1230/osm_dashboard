import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { CreatinineCalculatorComponent } from './creatinine-calculator/creatinine-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    BmiCalculatorComponent,
    CreatinineCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
