import { EditorViewComponent, EditorDocumentComponent } from "./editor-view.component";
import { Ng2StateDeclaration } from "@uirouter/angular";
import { CategoryService } from "./services/category.service";
import { Transition } from '@uirouter/core';
import { DocumentService } from "./services/document.service";
import { DocumentDescriptionComponent } from "./document-description/document-description.component";

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
    url: '/document/:documentId',
    views: {
        'description': {
            component: DocumentDescriptionComponent
        }
    },
    resolve: [
        {
            token: 'document',
            deps: [Transition, DocumentService],
            resolveFn: (transition, document) => {
                return document.get(transition.params().documentId);
            }
        }
    ]
}

export const EDITOR_STATES = [
    editorState,
    documentState
];