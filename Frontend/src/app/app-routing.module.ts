import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClienteListComponent} from './components/cliente-list/cliente-list.component';
import {ClienteFormComponent} from './components/cliente-form/cliente-form.component';
const routes: Routes = [
  {
    path:'',
    redirectTo: '/clientes',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component: ClienteListComponent
  },
  {
    path: 'clientes/agregar',
    component: ClienteFormComponent
  },
  {
    path: 'clientes/editar/:id',
    component: ClienteFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
