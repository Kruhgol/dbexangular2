import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { UIRouterModule } from '@uirouter/angular';
import { APP_STATES } from './app.states';
import { LoginModule } from './login/login.module';
import { routerConfigFn } from './router.config';
import { AppServicesModule } from './app-services/app-services.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './app-services/classes/auth.interceptor';

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
      config: routerConfigFn
      otherwise: {
        state: 'home'
      }
    }),
    LoginModule,
    FormsModule,
    AppServicesModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
