import { DynamicFormModel, DynamicFormModelConfig } from './form.model';

export interface DynamicMultiSelectConfig extends DynamicFormModelConfig<any> {
  id: string;
  label: string;
  options: Option[];
  value?: string[];
  disabled?: boolean;
}

export class DynamicMultiSelectModel extends DynamicFormModel<any> {
  id: string;
  label: string;
  options: Option[];
  value?: string[];
  disabled?: boolean;

  constructor(object: DynamicMultiSelectConfig) {
    super(object);
    this.id = object.id || '';
    this.label = object.label || '';
    this.options = object.options || [];
    this.value = object.value || [];
    this.disabled = object.disabled || undefined;
  }
}

export class Option {
  id: string;
  label: string;
  value: string;
  
  constructor(object: Option) {
    this.id = object.id || '';
    this.label = object.label || '';
    this.value = object.value || '';
  }
}
