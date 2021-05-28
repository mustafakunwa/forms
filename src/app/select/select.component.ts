import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  HostListener,
} from '@angular/core';
import { DynamicSelectModel } from '../models/select.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() model!: DynamicSelectModel;
  @Input() form: FormGroup | undefined;
  @Input() variant: string = '';
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
  selectedObject: Object = { label: null, value: null };

  constructor(private eRef: ElementRef) {}

  ngOnInit(): void {
    this.setSelectedValue();
  }

  setSelectedValue() {
    if (this.model.value) {
      const { label, value } = this.model.options.find(
        (option) => option.value === this.model.value
      );
      this.selectedObject = { label, value };
    }
  }

  handleClickOnSelect() {
    if (!this.model.disabled) {
      this.isOpen = !this.isOpen;
      this.form.controls[this.model.formControlName].markAsTouched();
    }
  }

  handleClickOnOption(option) {
    this.model.value = option.value;
    this.selectedObject = { label: option.label, value: option.value };
    this.form.controls[this.model.formControlName].setValue(option.value);
    this.modelChange.emit(this.model);
  }
}
