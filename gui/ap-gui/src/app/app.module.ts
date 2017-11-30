import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes.component';
import { ClienteService } from './cliente.service';
import { ListaClientesComponent } from './listaClientes.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ListaClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'clientes',
        component: ListaClientesComponent
      },
      {
        path: 'cadastrocliente',
        component: ClientesComponent
      }
    ])
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
