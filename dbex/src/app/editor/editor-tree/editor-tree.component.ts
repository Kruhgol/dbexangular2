import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'editor-tree',
  templateUrl: './editor-tree.component.html',
  styleUrls: ['./editor-tree.component.scss']
})
export class EditorTreeComponent implements OnInit {

  constructor(private category: CategoryService) { }

  ngOnInit() {
    console.log('------fjhfjhfjfjfjfjfjfjf-----')
    this.category.getTree();
  }

}
