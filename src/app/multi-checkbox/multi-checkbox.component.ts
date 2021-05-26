import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { dynamicCheckboxModel } from '../models/checkbox.model';

@Component({
  selector: 'app-multi-checkbox',
  templateUrl: './multi-checkbox.component.html',
  styleUrls: ['./multi-checkbox.component.scss'],
})
export class MultiCheckboxComponent implements OnInit {
  @Input() model!: dynamicCheckboxModel;
  @Input() form: FormGroup | undefined;
  @Input() onBlur: EventEmitter<any> = new EventEmitter();
  @Input() onFocus: EventEmitter<any> = new EventEmitter();
  @Input() onChange: EventEmitter<any> = new EventEmitter();
  @Input() modelChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onInputChange(_event: any, label) {
    let value = _event.currentTarget.checked;
    if (value) {
      this.model.value.push(label);
    } else {
      this.model.value = this.model.value.filter(
        (checked) => checked !== label
      );
    }
    this.modelChange.emit();
  }
}
