import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BuscarComponent } from './buscar/buscar.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'biblioteca', component: BibliotecaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: "", redirectTo: "/main", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
