import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LocalComponent } from './components/local/local.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { VacinaComponent } from './components/vacina/vacina.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'HOME' } },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'HOME' },
  },
  {
    path: 'local',
    component: LocalComponent,
    data: { title: 'LOCAL' },
  },
  {
    path: 'vacina',
    component: VacinaComponent,
    data: { title: 'VACINA' },
  },
  {
    path: 'sobre',
    component: SobreComponent,
    data: { title: 'SOBRE' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
