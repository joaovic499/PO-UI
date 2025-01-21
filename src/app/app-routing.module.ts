import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VeiculosViewsComponent } from './views/veiculos-views/veiculos-views.component';
import { VeiculosControllerComponent } from './controller/veiculos-controller/veiculos-controller.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro/chassi', component: VeiculosViewsComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'novo/veiculo', component: VeiculosComponent},
  {path: 'teste', component: VeiculosControllerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
