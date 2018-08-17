import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login/login.component";

export const appState = {
    name: 'app',
    url: '',
    component: AppComponent
};

export const loginState = {
    name: 'login',
    url: '/login',
    component: LoginComponent
}

export const APP_STATES = [
    appState,
    loginState
];