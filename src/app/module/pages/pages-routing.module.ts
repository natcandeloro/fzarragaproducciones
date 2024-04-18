import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ContacComponent } from './contac/contac.component';
import { HistoriaComponent } from './historia/historia.component';
import { HomeComponent } from './home/home.component';
import { SomosComponent } from './somos/somos.component';
import { VisionComponent } from './vision/vision.component';
import { LayoutComponent } from '../layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'nosotros', component: HistoriaComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'contacto', component: ContacComponent },
      { path: 'somos', component: SomosComponent },
      { path: 'vision', component: VisionComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
