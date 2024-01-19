import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryZoneComponent } from './memory-zone/memory-zone.component';
import { HoanghaComponent } from './hoangha/hoangha.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryZoneComponent,
    HoanghaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
