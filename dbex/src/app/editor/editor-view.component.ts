import { Component, Input, OnInit } from '@angular/core';

@Component ({
    selector: 'editor-view',
    templateUrl: '/editor-view.component.html',
})
export class EditorViewComponent implements OnInit{
    @Input() documents;

    constructor() {}

    name: string = 'new document name';

    ngOnInit() {
    }
}

@Component ({
    selector: 'editor-document',
    template: '<h1>hello document</h1>',
})
export class EditorDocumentComponent {
}