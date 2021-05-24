import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { Componenet1Component } from './componenet1/componenet1.component';
import { ShoppingSectionComponent } from './shoppingSection/shoppingSection.component';
import { Componenet3Component } from './componenet3/componenet3.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    Componenet1Component,
    ShoppingSectionComponent,
    Componenet3Component,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatGridListModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
