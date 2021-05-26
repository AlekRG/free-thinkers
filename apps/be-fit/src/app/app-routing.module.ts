import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingSectionComponent } from './shoppingSection/shoppingSection.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'first', component: GalleryComponent },
  { path: 'shoppingSection', component: ShoppingSectionComponent },
  { path: 'highscores', component: HighscoresComponent },
  { path: 'fourth', component: SettingsComponent },
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
