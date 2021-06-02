import { FormGroup } from '@angular/forms';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
} from '@angular/core';
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

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  isOpen: boolean = false;
  constructor(private eRef: ElementRef) {}

  ngOnInit(): void {}

  handleClickOnSelect() {
    if (
      !this.model.disabled &&
      !this.form.controls[this.model.formControlName].disabled
    ) {
      this.isOpen = !this.isOpen;
      this.form.controls[this.model.formControlName].markAsTouched();
    }
  }

  displayExtendedOption(optionvalue) {
    return this.model.options.find((option) => option.value == optionvalue)
      .label;
  }

  handleClickOnOption(event, clickedOption) {
    if (this.model.value.some((option) => option === clickedOption.value)) {
      this.model.value = this.model.value.filter(
        (option) => option !== clickedOption.value
      );
    } else {
      this.model.value.push(clickedOption.value);
    }
    this.form.controls[this.model.formControlName].setValue(this.model.value);
    this.modelChange.emit(this.model);
  }

  isChecked(option) {
    return this.model.value.find(
      (selectedOption) => selectedOption === option.value
    );
  }
}
