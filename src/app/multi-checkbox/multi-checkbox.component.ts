import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DynamicCheckboxModel } from '../models/checkbox.model';

@Component({
  selector: 'app-multi-checkbox',
  templateUrl: './multi-checkbox.component.html',
  styleUrls: ['./multi-checkbox.component.scss'],
})
export class MultiCheckboxComponent implements OnInit {
  @Input() model!: DynamicCheckboxModel;
  @Input() form: FormGroup | undefined;
  @Output() onBlur: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onInputChange(_event: any, label?: string) {
    let value = _event.currentTarget.checked;
    if (this.model.isMultiSelect) {
      // Change value of that option
      let index = this.model.options.findIndex(
        (option) => option.label == label
      );
      let option = { ...this.model.options[index] };
      option.checked = value;
      this.model.options[index] = option;
      // End Here
      if (value) {
        this.model.value.push(label);
      } else {
        this.model.value = this.model.value.filter(
          (checked) => checked !== label
        );
      }
    } else {
      this.model.value = value;
    }
    this.modelChange.emit(this.model);
  }
}
