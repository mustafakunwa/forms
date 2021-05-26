import { DynamicFormModel, DynamicFormModelConfig } from './form.model';

export interface dynamicCheckboxModelConfig
  extends DynamicFormModelConfig<any> {
  id?: string;
  label?: string;
  options: option[];
  value: string[];
}

export class dynamicCheckboxModel extends DynamicFormModel<any> {
  id?: string;
  label?: string;
  options: option[];
  value?: string[];

  constructor(object: dynamicCheckboxModelConfig) {
    super(object);
    this.id = object.id || '';
    this.label = object.label || '';
    this.options = object.options || [];
    this.value = object.value || [];
  }
}

export class option {
  label?: string;
  value?: boolean;
  formControlName?: string;
  checked?: boolean;

  constructor(object: option) {
    this.label = object.label || '';
    this.value = object.value || false;
    this.formControlName = object.formControlName || '';
    this.checked = object.checked || undefined;
  }
}

export interface singleCheckBoxConfig extends DynamicFormModelConfig<any> {
  id?: string;
  label: string;
  value?: boolean;
}

export class singleCheckboxModel extends DynamicFormModel<any> {
  id?: string;
  label: string;
  value?: boolean;

  constructor(object: singleCheckBoxConfig) {
    super(object);
    this.id = object.id || '';
    this.label = object.label || '';
    this.value = object.value || false;
  }
}
