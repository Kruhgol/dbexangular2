import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorTreeFolderComponent } from './editor-tree-folder.component';

describe('EditorTreeFolderComponent', () => {
  let component: EditorTreeFolderComponent;
  let fixture: ComponentFixture<EditorTreeFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorTreeFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorTreeFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
