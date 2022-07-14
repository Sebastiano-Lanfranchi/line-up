import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { MapChoserComponent } from './components/map-choser/map-choser.component';
import { AgentChoserComponent } from './components/agent-choser/agent-choser.component';

@NgModule({
  declarations: [
    AppComponent,
    MapChoserComponent,
    AgentChoserComponent
  ],
  imports: [
    BrowserModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
