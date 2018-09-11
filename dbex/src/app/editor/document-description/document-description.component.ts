import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-document-description',
  templateUrl: './document-description.component.html',
  styleUrls: ['./document-description.component.scss']
})
export class DocumentDescriptionComponent implements OnInit {
  @Input() document;
  constructor() { }

  number: string = 'fhhffhfhfhfhfhfhf'

  ngOnInit() {
    console.log('--document-description--', this.document);
    this.document
      .subscribe(data => this.document = data);
  }

}
