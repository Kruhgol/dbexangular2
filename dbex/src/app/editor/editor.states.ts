import { EditorViewComponent, EditorDocumentComponent } from "./editor-view.component";
import { Ng2StateDeclaration } from "@uirouter/angular";
import { CategoryService } from "./services/category.service";

export const editorState: Ng2StateDeclaration = {
    name: 'editor',
    parent: 'app',
    url: '/editor',
    views: {
        'app': {
            component: EditorViewComponent
        }
    },
    resolve: [
        {
            token: 'documents',
            deps: [CategoryService],
            resolveFn: category => {
                return category.getDocuments();
            }
        }
    ]
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