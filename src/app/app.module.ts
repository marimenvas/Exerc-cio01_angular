import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosModule } from './produtos/produtos.module';

@NgModule({
  declarations: [
    AppComponent,
    //ProdutosComponent
  ],
  imports: [
    BrowserModule,
    ProdutosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
