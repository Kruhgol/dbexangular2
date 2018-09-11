import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'editor-tree',
  templateUrl: './editor-tree.component.html',
  styleUrls: ['./editor-tree.component.scss']
})
export class EditorTreeComponent implements OnInit, OnChanges {
  @Input() name;
  @Input() tree;

  constructor(private category: CategoryService) { }

  treeData: Array<any> = [];

  ngOnInit() {
  }

  ngOnChanges() {
      this.tree
          .subscribe(data => this.treeData = data);
  }
}
