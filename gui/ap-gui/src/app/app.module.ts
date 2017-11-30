import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos.component';
import { ProdutoService } from './produto.service';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'produtos',
        component: ProdutosComponent
      }
    ])
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
