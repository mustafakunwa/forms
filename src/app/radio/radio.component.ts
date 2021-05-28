import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DynamicRadioModel } from '../models/radio.model';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  @Input() model!: DynamicRadioModel;
  @Input() form: FormGroup;
  @Output() onBlur: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onInputChange(value: any) {
    this.model.value = value;
    this.modelChange.emit(this.model);
  }
}
