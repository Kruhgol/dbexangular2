import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import { EDITOR_STATES } from './editor.states';
import { EditorViewComponent, EditorDocumentComponent } from './editor-view.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({
      states: EDITOR_STATES
    })
  ],
  declarations: [
    EditorViewComponent,
    EditorDocumentComponent
  ]
})
export class EditorModule { }
