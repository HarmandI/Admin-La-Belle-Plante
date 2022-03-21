import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTableauComponent } from './pages/page-tableau/page-tableau.component';
import { PageAjouterComponent } from './pages/page-ajouter/page-ajouter.component';
import { PageModifierComponent } from './pages/page-modifier/page-modifier.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PageTableauComponent,
    PageAjouterComponent,
    PageModifierComponent,
    FormulaireComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
