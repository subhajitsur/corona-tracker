import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.module.routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    
    DetailsComponent,
    
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
