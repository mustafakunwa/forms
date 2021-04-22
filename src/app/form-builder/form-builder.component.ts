import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  @Input() fields: any[] = [];
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    let fieldsCtrls = {};
    for (let field of this.fields) {
      let validators = [];
      if (field.required) validators.push(Validators.required);
      if (field.pattern) validators.push(Validators.pattern(field.pattern));

      if (field.type != 'checkbox') {
        fieldsCtrls[field.key] = new FormControl(field.value || '', [
          ...validators,
        ]);
      }else{
        let opts = {};
        for (let opt of field.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[field.key] = new FormGroup(opts)
      }
    }
    this.form = new FormGroup(fieldsCtrls);
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.form.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }
}
