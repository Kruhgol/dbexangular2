import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import { EDITOR_STATES } from './editor.states';
import { EditorViewComponent, EditorDocumentComponent } from './editor-view.component';
import { EditorTreeComponent } from './editor-tree/editor-tree.component';
import { EditorTreeFolderComponent } from './editor-tree-folder/editor-tree-folder.component';
import { DocumentDescriptionComponent } from './document-description/document-description.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({
      states: EDITOR_STATES,
    }),
    FormsModule
  ],
  declarations: [
    EditorViewComponent,
    EditorDocumentComponent,
    EditorTreeComponent,
    EditorTreeFolderComponent,
    DocumentDescriptionComponent
  ]
})
export class EditorModule { }
