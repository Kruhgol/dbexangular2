import { EditorViewComponent, EditorDocumentComponent } from "./editor-view.component";

export const editorState = {
    name: 'editor',
    url: '/editor',
    //parent: 'app',
    component: EditorViewComponent
};

export const documentState = {
    name: 'editor.document',
    url: '/document',
    views: {
        content: EditorDocumentComponent
    }
}

export const EDITOR_STATES = [
    editorState,
    documentState
];