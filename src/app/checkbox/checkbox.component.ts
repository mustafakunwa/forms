import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { singleCheckboxModel } from '../models/checkbox.model';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() model!: singleCheckboxModel;
  @Input() form: FormGroup | undefined;
  @Input() onBlur: EventEmitter<any> = new EventEmitter();
  @Input() onFocus: EventEmitter<any> = new EventEmitter();
  @Input() onChange: EventEmitter<any> = new EventEmitter();
  @Input() modelChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onInputChange(_event: any) {
    let value = _event.currentTarget.checked;
    this.model.value = value;
    this.modelChange.emit();
  }
}
