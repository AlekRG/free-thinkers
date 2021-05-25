import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Componenet1Component } from './componenet1/componenet1.component';
import { Componenet2Component } from './componenet2/componenet2.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { Componenet4Component } from './componenet4/componenet4.component';
const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'first', component: Componenet1Component },
  { path: 'second', component: Componenet2Component },
  { path: 'highscores', component: HighscoresComponent },
  { path: 'fourth', component: Componenet4Component },
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
