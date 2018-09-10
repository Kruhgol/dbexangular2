import { Component } from '@angular/core';

@Component ({
    selector: 'editor-view',
    templateUrl: '/editor-view.component.html',
})
export class EditorViewComponent {
    //title = 'app';
}

@Component ({
    selector: 'editor-document',
    template: '<h1>hello document</h1>',
})
export class EditorDocumentComponent {
    //title = 'app';
}