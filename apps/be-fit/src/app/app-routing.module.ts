import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingSectionComponent } from './shoppingSection/shoppingSection.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { Componenet4Component } from './componenet4/componenet4.component';
import { StepsHistoryComponent } from './stepsHistory/stepsHistory.component';
import { TokensHistoryComponent } from './tokensHistory/tokensHistory.component';
const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'first', component: GalleryComponent },
  { path: 'shoppingSection', component: ShoppingSectionComponent },
  { path: 'highscores', component: HighscoresComponent },
  { path: 'fourth', component: Componenet4Component },
  { path: 'stepsHistory', component: StepsHistoryComponent },
  { path: 'tokensHistory', component: TokensHistoryComponent },
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
