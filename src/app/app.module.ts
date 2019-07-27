import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { ArthmeticCalcComponent } from './arthmetic-calc/arthmetic-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    EmiCalculatorComponent,
    ArthmeticCalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
