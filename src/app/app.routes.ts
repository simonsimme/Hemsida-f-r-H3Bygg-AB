import { Home } from './pages/home/home';
import { Projekt } from './pages/projekt/projekt';
import { Tjanster } from './pages/tjanster/tjanster';
import { Media } from './pages/media/media';
import { Kontakt } from './pages/kontakt/kontakt';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projekt', component: Projekt },
  { path: 'tjanster', component: Tjanster },
  { path: 'media', component: Media },
  { path: 'kontakt', component: Kontakt },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }