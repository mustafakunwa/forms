import { DynamicFormModel, DynamicFormModelConfig } from './form.model';

export interface DynamicCheckboxModelConfig
  extends DynamicFormModelConfig<any> {
  id: string;
  label: string;
  options?: Option[];
  isMultiSelect?: boolean;
  value?: string[] | boolean;
}

export class DynamicCheckboxModel extends DynamicFormModel<any> {
  id: string;
  label: string;
  options?: Option[];
  value?: any;
  isMultiSelect?: boolean;

  constructor(object: DynamicCheckboxModelConfig) {
    super(object);
    this.id = object.id || '';
    this.label = object.label || '';
    this.options = object.options || [];
    this.isMultiSelect = object.isMultiSelect || false;
    this.value = object.isMultiSelect
      ? object.value || []
      : object.value || false;
  }
}

export class Option {
  label: string;
  value?: boolean;
  formControlName?: string;
  checked?: boolean;
  id: string;

  constructor(object: Option) {
    this.id = object.id;
    this.label = object.label || '';
    this.value = object.value || false;
    this.formControlName = object.formControlName || '';
    this.checked = object.checked || undefined;
  }
}
