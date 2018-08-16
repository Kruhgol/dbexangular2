import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { UIRouterModule } from '@uirouter/angular';
import { APP_STATES } from './app.states';
import { LoginModule } from './login/login.module';
import { routerConfigFn } from './router.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      otherwise: '/',
      //config: routerConfigFn
      // otherwise: {
      //   state: 'home'
      // }
    }),
    LoginModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
