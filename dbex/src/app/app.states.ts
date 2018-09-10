import { AppContentComponent } from "./app.component";
import { LoginComponent } from "./login/login/login.component";
import { EditorDocumentComponent } from "./editor/editor-view.component";

export const appState = {
    name: 'app',
    redirectTo: 'welcome',
    component: AppContentComponent
};

export const loginState = {
    name: 'login',
    parent: 'app',
    url: '/login',
    views: {
        'app': {
            component: LoginComponent
        }
    }
    //component: LoginComponent
}

export const welcomeState = {
    parent: 'app',
    name: 'welcome',
    url: '/welcome',
    component: EditorDocumentComponent
}

export const APP_STATES = [
    appState,
    loginState,
    welcomeState
];