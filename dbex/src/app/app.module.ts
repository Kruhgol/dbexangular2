import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UIRouterModule } from '@uirouter/angular';
import { APP_STATES } from './app.states';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      // otherwise: {
      //   state: 'home'
      // }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
