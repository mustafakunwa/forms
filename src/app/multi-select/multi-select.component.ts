import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DynamicMultiSelectModel } from '../models/multi-select.model';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent implements OnInit {
  @Input() model!: DynamicMultiSelectModel;
  @Input() form: FormGroup | undefined;
  @Output() onBlur: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
