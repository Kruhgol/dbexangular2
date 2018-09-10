import { EditorViewComponent, EditorDocumentComponent } from "./editor-view.component";
import { Ng2StateDeclaration } from "@uirouter/angular";

export const editorState: Ng2StateDeclaration = {
    name: 'editor',
    parent: 'app',
    url: '/editor',
    //component: EditorViewComponent
    views: {
        'app': {
            component: EditorViewComponent
        }
    }
};

export const documentState: Ng2StateDeclaration = {
    name: 'editor.document',
    url: '/document',
    views: {
        'content': {
            component: EditorDocumentComponent
        }
    }
}

export const EDITOR_STATES = [
    editorState,
    documentState
];