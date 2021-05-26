import { DynamicFormModel, DynamicFormModelConfig } from './form.model';

export interface dynamicCheckboxModelConfig
  extends DynamicFormModelConfig<any> {
  id?: string;
  label?: string;
  options?: option[];
  isMultiSelect?: boolean;
  value?: string[] | boolean;
}

export class dynamicCheckboxModel extends DynamicFormModel<any> {
  id?: string;
  label?: string;
  options?: option[];
  value?: any;
  isMultiSelect?: boolean;

  constructor(object: dynamicCheckboxModelConfig) {
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
