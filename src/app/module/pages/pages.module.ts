import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { ContacComponent } from './contac/contac.component';
import { HistoriaComponent } from './historia/historia.component';
import { HomeComponent } from './home/home.component';
import { SomosComponent } from './somos/somos.component';
import { VisionComponent } from './vision/vision.component';
import { LayoutModule } from '../layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ClientesComponent,
    ContacComponent,
    HistoriaComponent,
    HomeComponent,
    SomosComponent,
    VisionComponent

  ],
  imports: [
    CommonModule,
    LayoutModule,
    PagesRoutingModule,
    MatIconModule
  ]
})
export class PagesModule { }
