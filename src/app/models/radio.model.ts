import { DynamicFormModel, DynamicFormModelConfig } from './form.model';

export interface DynamicRadioModelConfig extends DynamicFormModelConfig<any> {
  id: string;
  label: string;
  options: Option[];
  value?: string;
  disabled?: boolean;
}

export class DynamicRadioModel extends DynamicFormModel<any> {
  id: string;
  label: string;
  options: Option[];
  value?: string;
  disabled?: boolean;

  constructor(object: DynamicRadioModelConfig) {
    super(object);
    this.id = object.id || '';
    this.label = object.label || '';
    this.options = object.options || [];
    this.value = object.value || '';
    this.disabled = object.disabled || undefined;
  }
}

export class Option {
  label: string;
  value: string;
  id: string;
  disabled?: boolean;

  constructor(object: Option) {
    this.id = object.id || '';
    this.label = object.label || '';
    this.value = object.value || '';
    this.disabled = object.disabled || undefined;
  }
}
