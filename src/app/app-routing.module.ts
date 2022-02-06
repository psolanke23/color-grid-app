import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchColorComponent } from './core/search-color/search-color.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'search-color', pathMatch: 'full' },
  { path: 'search-color', component: SearchColorComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
