import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAjouterComponent } from './pages/page-ajouter/page-ajouter.component';
import { PageModifierComponent } from './pages/page-modifier/page-modifier.component';
import { PageTableauComponent } from './pages/page-tableau/page-tableau.component';

const routes: Routes = [
  { path: '', redirectTo: 'tableau', pathMatch: 'full'},
  { path: 'modifier/:id', component: PageModifierComponent },
  { path: 'ajouter', component: PageAjouterComponent },
  { path: 'tableau', component: PageTableauComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
