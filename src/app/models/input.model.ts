import { DynamicFormModel, DynamicFormModelConfig } from './form.model';

export interface DynamicInputConfig extends DynamicFormModelConfig<any> {
  id: string;
  label: string;
  value?: string;
  disabled?: boolean;
  inputType?: string;
  placeholder?: string;
}

export class DynamicInputModel extends DynamicFormModel<any> {
  id: string;
  label: string;
  value?: string;
  disabled?: boolean;
  inputType?: string;
  placeholder?: string;

  constructor(object: DynamicInputConfig) {
    super(object);
    this.id = object.id || '';
    this.label = object.label || '';
    this.value = object.value || '';
    this.disabled = object.disabled || undefined;
    this.inputType = object.inputType || 'text';
    this.placeholder = object.placeholder || '';
  }
}
