import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import { EDITOR_STATES } from './editor.states';
import { EditorViewComponent, EditorDocumentComponent } from './editor-view.component';
import { EditorTreeComponent } from './editor-tree/editor-tree.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({
      states: EDITOR_STATES,
    })
  ],
  declarations: [
    EditorViewComponent,
    EditorDocumentComponent,
    EditorTreeComponent
  ]
})
export class EditorModule { }
