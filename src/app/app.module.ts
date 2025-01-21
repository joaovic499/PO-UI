import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModalModule, PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';

import { PoPageLoginModule } from '@po-ui/ng-templates';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { CommonModule } from '@angular/common';
import { VeiculosViewsComponent } from './views/veiculos-views/veiculos-views.component';
import { VeiculosControllerComponent } from './controller/veiculos-controller/veiculos-controller.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientesComponent,
    VeiculosViewsComponent,
    VeiculosComponent,
    VeiculosControllerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    PoPageLoginModule,
    FormsModule,
    ReactiveFormsModule,
    PoModalModule,
    PoPageDynamicTableModule,
    CommonModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
