import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputFormPage } from './input-form/input-form.page';
import { MapaPage } from './mapa/mapa.page';

const routes: Routes = [
  { path: '', redirectTo: 'input-form', pathMatch: 'full' },
  { path: 'input-form', component: InputFormPage },
  { path: 'mapa/:nombre/:apellido/:latitud/:longitud', component: MapaPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}