import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Componenet1Component } from './componenet1/componenet1.component';
import { Componenet2Component } from './componenet2/componenet2.component';
import { Componenet3Component } from './componenet3/componenet3.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StepsHistoryComponent } from './stepsHistory/stepsHistory.component';
import { TokensHistoryComponent } from './tokensHistory/tokensHistory.component';

@NgModule({
  declarations: [
    AppComponent,
    Componenet1Component,
    Componenet2Component,
    Componenet3Component,
    StepsHistoryComponent,
    TokensHistoryComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
