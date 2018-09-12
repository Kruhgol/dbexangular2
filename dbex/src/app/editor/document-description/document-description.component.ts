import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-document-description',
  templateUrl: './document-description.component.html',
  styleUrls: ['./document-description.component.scss']
})
export class DocumentDescriptionComponent implements OnInit {
  @Input() document;
  constructor() { }

  //category: FormControl = new FormControl();
  formFields: Array<string> = ['number', 'revision', 'issuingOrg', 'author', 'title'];
  formDateFields: Array<string> = ['publishingDate', 'revisionDate'];

  documentForm: FormGroup = new FormGroup({
    number: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
    revision: new FormControl(),
    publishingDate: new FormControl(null, [Validators.required]),
    revisionDate: new FormControl(null, [Validators.required]),
    issuingOrg: new FormControl(),
    author: new FormControl(),
    title: new FormControl()
  });

  ngOnInit() {
    this.document
      .subscribe((data) => this.initForm(data));
  }

  initForm(data) {
    this.document = data;

    this.formFields.forEach(field => {
      this.documentForm.controls[field].patchValue(this.document[field]);
    });

    this.formDateFields.forEach(field => {
      this.documentForm.controls[field].patchValue(new Date(this.document[field]);
    })
  }
}
