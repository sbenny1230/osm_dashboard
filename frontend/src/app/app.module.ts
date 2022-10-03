import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { BmiCalculatorAdultComponent } from './bmi-calculator-adult/bmi-calculator-adult.component';
import { BmiCalculatorChildComponent } from './bmi-calculator-child/bmi-calculator-child.component';

@NgModule({
  declarations: [
    AppComponent,
    BmiCalculatorComponent,
    BmiCalculatorAdultComponent,
    BmiCalculatorChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
