import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'editor-tree-folder',
  templateUrl: './editor-tree-folder.component.html',
  styleUrls: ['./editor-tree-folder.component.scss']
})
export class EditorTreeFolderComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
