import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudanteComponent } from './estudante/estudante.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstudanteDetailComponent } from './estudante-detail/estudante-detail.component';

const routes: Routes = [
  //rota padrão da aplicação
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'estudantes', component: EstudanteComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:ra', component: EstudanteDetailComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

